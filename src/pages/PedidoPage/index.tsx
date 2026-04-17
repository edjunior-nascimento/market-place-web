import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { PedidoType } from "../../types/pedido.type";
import { useMemo } from "react";



export function PedidoPage() {  

  const pedidos = useAppSelector((state) => state.pedidos.pedidos);

  const subTotal = useMemo(() => {
    return pedidos.reduce((total, pedido) => total + pedido.precoTotal, 0);
  }, [pedidos]);

  return (
    <Container sx={{padding:'10px'}}>
      <InputStepper posicao={0}></InputStepper>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: {xs: '0px', md: '150px'},
        }}
      >  
        <Box sx={{ display: 'flex', flexDirection: 'column', gap:'10px'}}>

          <Typography py={2} variant="h5">Pedidos</Typography>

          <Box>
            {pedidos.length === 0 ? (
              <Typography variant="h6" align="center" mt={4}>
                Nenhum pedido selecionado.
              </Typography>
            ) : (
              pedidos.map((pedido) => (
                <CardPedido
                  id={pedido.id}
                  key={pedido.id}
                  titulo={pedido.produto.nome}
                  descricao={pedido.produto.descricao}
                  quantidade={pedido.quantidade}
                  preco={pedido.produto.preco}
                  />
              ))
            )}
            
          </Box>
        </Box>
        
        <Divider sx={{ my: 2 }} />

        {pedidos.length > 0 && (
         <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          >
            <Typography variant="h6" fontWeight="Normal">
              SubTotal
            </Typography>

            <Typography variant="h6">
                { subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
              </Typography>

          </Box>
        )}
       

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: {xs: 'space-between',md:'flex-end'}, gap:'10px'}} mt={2}>
          <Link to="/"><Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Voltar</Button></Link>
          <Link to="/entrega"><Button variant="contained">Continuar</Button></Link>
        </Box>

      </Box>
    </Container>
  );
}