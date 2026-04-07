import { Box, Button, Card, Container, Divider, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { CardEntrega } from "../../components/layouts/CardEntrega";
import { CardPagamento } from "../../components/layouts/CardPagamento";
import { Link } from "react-router-dom";

export function FinalizacaoPage() {  
  return (
    <Container sx={{padding:'10px'}}>
      <InputStepper posicao={3}></InputStepper>
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
            modoExibicao={true}
          />

          <CardPedido
            titulo="Produto Exemplo"
            descricao="Descrição do produto exemplo"
            quantidade="1"
            preco="R$ 100,00"
            modoExibicao={true}
          />
        </Box>

        <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: {xs:'column', md: 'row'}, gap:'10px'}}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap:'5px'}}>
            <Typography py={2} variant="h5">Endereço de Entrega</Typography>
            <CardEntrega
              key={1}
              codigo={1}
              nome="Antonio da Silva"
              telefone="(88) 99999-9999"
              endereco="Rua Exemplo"
              numero="123"
              referencia="Perto do mercado"
              modoExibicao={true}
            />
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap:'5px'}}>
            <Typography py={2} variant="h5">Forma de Pagamento</Typography>
            <CardPagamento 
              codigo={1} 
              forma="cartao"
              modoExibicao={true}
            />
          </Box>
        </Box>

        <Card
          sx={{
          backgroundColor: '#ffffffDD',
          padding: '20px',
          marginTop: '20px',
          borderRadius: 4,
          boxShadow: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          }}
        >

          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant="h6" fontWeight="Normal">
              SubTotal:
            </Typography>
            <Typography variant="h6">
                R$ 300,00
              </Typography>
          </Box>

          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant="h6" fontWeight="Normal">
              Taxas:
            </Typography>
            <Typography variant="h6">
                R$ 1,00
              </Typography>
          </Box>

          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant="h6" fontWeight="Normal">
              Descontos:
            </Typography>
            <Typography variant="h6">
                R$ 300,00
              </Typography>
          </Box>
          
          <Divider />
           
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography variant="h5" fontWeight="Normal">
              Total:
            </Typography>
            <Typography variant="h5">
                R$ 300,00
            </Typography>
          </Box>


        </Card>

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: {xs: 'space-between',md:'flex-end'}, gap:'10px'}} mt={2}>
          <Link to="/pagamento"><Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Voltar</Button></Link>
          <Link to="/confirmacao"><Button variant="contained">Continuar</Button></Link>
        </Box>

      </Box>
    </Container>
  );
}