import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";
import { Header } from "../../components/layouts/Header";

export function DescontoPage() {  

  const [desconto, setDesconto] = useState<string>('');
  const navigate = useNavigate();
  
  return (
    <Container sx={{padding:'10px'}}>
      <Header link="/troco" showCartButton={false}/>
      <InputStepper posicao={2}></InputStepper>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: {xs: '0px', md: '150px'},
        }}
      >  
        <Box sx={{ display: 'flex', flexDirection: 'column', gap:'10px'}}>
          <Box>
            <Typography py={2} variant="h5">Cupom de Desconto</Typography>
            <Typography variant="subtitle1" lineHeight={1}>Tem algum cupom de desconto?</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:'row', gap:'20px', alignItems:'center'}}>
            <TextField fullWidth label="Cupom de Desconto" id="desconto" value={desconto?desconto:''} onChange={(e) => setDesconto(e.target.value)}/>
            <Button variant="contained" >Aplicar</Button>
          </Box>
        </Box>

        <BottomConfirmation onPrimario={()=> navigate('/finalizacao')} onSecundario={()=> navigate('/troco')}></BottomConfirmation>

      </Box>
    </Container>
  );
}