import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useState } from "react";
import { Header } from "../../components/layouts/Header";

export function ConfirmacaoPage() {  

  const [troco, setTroco] = useState<number>(0);
  
  return (
    <Container sx={{padding:'10px'}}>
      <Header link="/"/>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: {xs: '0px', md: '150px'},
        }}
      >  
        <Box sx={{ 
          position: 'absolute',
            top: { xs: '50%', md: '50%' },
            left: { xs: '50%', md: '50%' },
            transform: { xs: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' },
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'}}>
        
            <Typography variant="h6" >
              Chave Pix:
            </Typography>
            <Typography variant="h6" fontWeight="Normal">
              Maria de Sousa Silva
            </Typography>
            <Typography variant="h6" fontWeight="Normal">
              003.123.543-10
            </Typography>
            <Button variant="contained">Copiar Chave</Button>  

        </Box>

      </Box>
    </Container>
  );
}