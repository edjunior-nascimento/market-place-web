import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";

export function PedidoPage() {  
  return (
    <Container sx={{padding:'10px'}}>
      <InputStepper posicao={0}></InputStepper>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        px: {xs: '0px', md: '150px'},
      }}>  
        <Box sx={{ display: 'flex', flexDirection: 'column', gap:'10px'}}>

          <Typography py={2} variant="h5">Pedidos</Typography>

          <CardPedido
            titulo="Produto Exemplo"
            descricao="Descrição do produto exemplo"
            quantidade="1"
            preco="R$ 100,00"
          />

          <CardPedido
            titulo="Produto Exemplo"
            descricao="Descrição do produto exemplo"
            quantidade="1"
            preco="R$ 100,00"
          />

          <CardPedido
            titulo="Produto Exemplo"
            descricao="Descrição do produto exemplo"
            quantidade="1"
            preco="R$ 100,00"
          />
        </Box>
        
        <Divider sx={{ my: 2 }} />

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
              R$ 300,00
            </Typography>

        </Box>

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: {xs: 'space-between',md:'flex-end'}, gap:'10px'}} mt={2}>
          <Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Voltar</Button>
          <Button variant="contained">Continuar</Button>
        </Box>

      </Box>
     
    </Container>
  );
}