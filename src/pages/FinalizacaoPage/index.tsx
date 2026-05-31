import { Box, Button, Card, Container, Divider, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { CardEntrega } from "../../components/layouts/CardEntrega";
import { CardPagamento } from "../../components/layouts/CardPagamento";
import { Link, useNavigate } from "react-router-dom";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";
import { Header } from "../../components/layouts/Header";

export function FinalizacaoPage() {  
  const navigate = useNavigate();
  return (
    <Container sx={{padding:'10px'}}>
      <Header link="/pagamento" showCartButton={false}/>
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
            id="1"
            titulo="Produto Exemplo"
            descricao="Descrição do produto exemplo"
            quantidade={1}
            preco={100}
            modoExibicao={true}
          />

          <CardPedido
            id="2"
            titulo="Produto Exemplo"
            descricao="Descrição do produto exemplo"
            quantidade={1}
            preco={100}
            modoExibicao={true}
          />
        </Box>

        <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: {xs:'column', md: 'row'}, gap:'10px'}}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap:'5px'}}>
            <Typography py={2} variant="h5">Endereço de Entrega</Typography>
            <CardEntrega
              key={1}
              codigo="1"
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

        <BottomConfirmation onPrimario={()=> navigate('/confirmacao')} onSecundario={()=> navigate('/pagamento')}></BottomConfirmation>
        
      </Box>
    </Container>
  );
}