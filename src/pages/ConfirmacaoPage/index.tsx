import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useEffect, useState } from "react";
import { Header } from "../../components/layouts/Header";
import { useAppSelector } from "../../store/hooks";
import { CheckCircle, CheckCircleOutlined, CheckCircleOutlineOutlined } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";

export function ConfirmacaoPage() {

  const navigate = useNavigate();
  const [troco, setTroco] = useState<number>(0);
  const compra = useAppSelector((state) => state.compra);

  useEffect(() => {
    if(compra.pedido.length === 0){
      navigate('/');
    }
  }, [])


  return (
    <Container sx={{ padding: '10px' }}>
      <Header link="/" showCartButton={false} />
      <Box sx={{
        position: 'absolute',
        height: '80%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <CheckCircleOutlined sx={{ fontSize: 60, color: 'green' }} />
          <Typography sx={{ fontSize: 20, }} fontWeight="bold">
            Pedido Enviado !
          </Typography>
          <Typography align="center" fontWeight="Normal">
            Acompanhe seu pedido pelo whatsapp.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} fullWidth onClick={() => navigate('/')}>Ok</Button>
        </Box>
{/* 
        {compra.pagamento === "PIX" && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h6" >
              Chave Pix:
            </Typography>
            <Typography variant="h6" fontWeight="Normal">
              Maria de Sousa Silva
            </Typography>
            <Typography variant="h6" fontWeight="Normal">
              003.123.543-10
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }} fullWidth>Copiar Chave</Button>
          </Box>
        )}
        {compra.pagamento === "CARTAO" && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant="h6" >
              Pagamento com cartão selecionado
            </Typography>
            <Typography variant="h6" fontWeight="Normal">
              Aguarde o entregador chegar para realizar o pagamento.
            </Typography>
          </Box>
        )}
        {compra.pagamento === "DINHEIRO" && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
          </Box>
        )} */}

      </Box>
    </Container>
  );
}