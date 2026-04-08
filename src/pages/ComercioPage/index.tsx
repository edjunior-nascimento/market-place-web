import { Box, Container, Typography} from "@mui/material";
import { Header } from "../../components/layouts/Header";
import { ButtonRadio } from "../../components/feature/ButtonRadio";
import { CardProduto } from "../../components/layouts/CardProduto";
import { InputSearch } from "../../components/feature/InputSearch";
import { useEffect, useState } from "react";
import ProdutoService from "../../service/produto.service";
import { ProdutoType } from "../../types/produto.type";
import { CategoriaType } from "../../types/categoria.type";
import CategoriaService from "../../service/categoria.service";

export function ComercioPage() {  

  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [categorias, setCategorias] = useState<CategoriaType[]>([]);
  const [pesquisa, setPesquisa] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    
    async function loadData() {
      await getCategorias();
      await getProdutos();
    }

    loadData();
   
  }, []);

  async function getCategorias() {
    CategoriaService.listar()
      .then(response => {
        setCategorias(response);
      })
      .catch(error => {
        console.error('Erro ao buscar entregas', error);
      })
      .finally(() => {     
        setLoading(false);
      });
  }

  async function getProdutos() {
    ProdutoService.listar()
      .then(response => {
        setProdutos(response);
      })
      .catch(error => {
        console.error('Erro ao buscar entregas', error);
      })
      .finally(() => {     
        setLoading(false);
      });
  }

  const filtroProdutos = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <Container sx={{padding:'10px'}}>
      <Header link="/" />
      <Box sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        px: {xs: '0px', md: '150px'},
      }}>
        <Box sx={{display:"flex", justifyContent: 'space-between'}} m={1}>
          <Box>
            <Typography variant="h5" component="h5">MacDonald’s</Typography>
            <Box sx={{display:'flex', flexDirection: 'row'}}><Typography>Aberto</Typography><Typography> · Fecha 15:00</Typography></Box>
            <Typography>Rua Amorizinete 302 - Centro</Typography>
            <Typography>(88) 99999-9999</Typography>
          </Box>
          <Box>
            <Box component="img" sx={{maxWidth:'62px'}} src="./sem-img-comercio.png" alt="Logo Comércio" />
          </Box>
        </Box>
        
        <InputSearch pesquisa={pesquisa} setPesquisa={setPesquisa} />

        <Box 
          sx={{
            display:'flex', 
            flexDirection: 'row', 
            overflowX: 'auto', 
            gap: '10px', 
            scrollbarWidth: 'none',
            background: '#F5F5F5',
            position: "sticky",
            top: 0,
            zIndex: 10,
            }} px={1} py={2}>
          
          {categorias.map((categoria) => (
            <ButtonRadio key={categoria.id} label={categoria.nome} />
          ))}
        </Box>

        <Box>
          {
            loading ? (
              <Typography>Carregando...</Typography>
            ) : (
              categorias.map((categoria) => (
                <Box>
                  <Typography py={2} variant="h5" key={categoria.id}>{categoria.nome}</Typography>
                  <Box
                    sx={{
                      display: {xs: 'grid', md: 'flex'},
                      flexWrap: {xs: 'nowrap', md: 'wrap'},
                      gridTemplateColumns: {xs: '2fr 2fr', md: '1fr'},
                      gap: '10px',
                      padding: '1rem',
                    }}
                  >
                    {

                      filtroProdutos.filter(produto => produto.categoria === Number(categoria.id)).map((produto) => (
                        <CardProduto
                          key={produto.codigo}
                          nome={produto.nome}
                          descricao={produto.descricao}
                          preco={produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        />
                      ))
                    }
                  </Box>
                </Box>
              ))
            )
          }
        </Box>

      </Box>
    </Container>
  );
}