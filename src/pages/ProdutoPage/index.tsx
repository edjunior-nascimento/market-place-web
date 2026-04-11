import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import { Header } from "../../components/layouts/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { CheckboxOpcao } from "../../components/feature/CheckboxOpcao";
import { InputCounter } from "../../components/feature/InputCounter";
import { AddShoppingCart } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProdutoType } from "../../types/produto.type";
import ProdutoService from "../../service/produto.service";
import { adicionar } from "../../store/pedidos.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export function ProdutoPage() {  
  
  const dispatch = useAppDispatch();
  const { produtoId } = useParams();
  const [produto, setProduto] = useState<ProdutoType | null>(null);
  const [quantidade, setQuantidade] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
     if (produtoId) {
       ProdutoService.getById(produtoId)
        .then(response => {
          setProduto(response);
        })
        .catch(error => {
          console.error('Erro ao buscar produto', error);
        })
        .finally(() => {     
          setLoading(false);
        });
     }  
  }, []);

  const adicionarAoCarrinho = () => {
    if (produto) {
      dispatch(
        adicionar({
          produto: produto,
          quantidade: quantidade,
          precoTotal: quantidade*produto.preco,
          status: 'Pendente',
          dataPedido: new Date().toISOString()
        })
      );
    }
  };

  const quantidadePedidos = useAppSelector((state) => {
    return state.pedidos.pedidos.length;
  });

  return (
    loading ? (
      <Typography variant="h6" align="center" mt={4}>
        Carregando...
      </Typography>
    ) : (
    <Container sx={{padding:'10px'}}>
      <Header link="/" quantidadePedidos={quantidadePedidos}/>  
      <Box 
        sx={{ 
          px: {xs: '0px', md: '150px'},
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          gap: '20px',
          }}>
            <Box sx={{
              width: {xs: '100%', md: '50%'},
              }}>
              <Swiper  
                modules={[Pagination]} 
                pagination={{ clickable: true }}
                slidesPerView={1}>
                <SwiperSlide>
                  <Box component="img" sx={{width:'100%', height: 300, objectFit: 'contain'}} src="/x-comida.jpg" alt="Logo Comércio" />
                </SwiperSlide>
                <SwiperSlide>
                  <Box component="img" sx={{width:'100%', height: 300, objectFit: 'contain'}} src="/x-comida2.jpg" alt="Logo Comércio" />
              </SwiperSlide>
              </Swiper>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap:'10px', p:2, width: {xs: '100%', md: '50%'},}}>
              <Typography variant="h5" color="primary">
                {produto?.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </Typography>

              <Typography variant="h5">
                {produto?.nome}
              </Typography>
              
              <Typography>
                {produto?.descricao}
              </Typography>
              
              <Box sx={{display:'flex', justifyContent: 'center'}}>
                <InputCounter
                  min={1}
                  max={produto?.quantidade || 10}
                  initialValue={1}
                  onChange={(value) => setQuantidade(value)}
                />
              </Box>

              <Box sx={{display:'flex', flexDirection: 'column', gap: '3px'}}>      
                {
                produto?.componentes?.map((opcional:string, index:number) => (
                    <CheckboxOpcao key={`${opcional}-${index}`} habilitado={true}>{opcional}</CheckboxOpcao>
                  ))
                }
              </Box>

              <InputBase 
              sx={{
                p:2,
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.2)',
              }} 
                fullWidth placeholder="Observações" multiline minRows={3}/>

              <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}} mt={2}>
                <Link to="/pedido"><Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Comprar</Button></Link>
                <Button variant="contained"  startIcon={<AddShoppingCart />} onClick={adicionarAoCarrinho} >Adicionar ao Carrinho</Button>
              </Box>
            </Box>
      </Box>
    </Container>
    )
  );
}