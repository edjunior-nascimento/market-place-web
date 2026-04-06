import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useState } from "react";
import { Link } from "react-router-dom";

export function DescontoPage() {  

  const [desconto, setDesconto] = useState<string>('');
  
  return (
    <Container sx={{padding:'10px'}}>
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

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: {xs: 'space-between',md:'flex-end'}, gap:'10px'}} mt={2}>
          <Link to="/troco"><Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Voltar</Button></Link>
          <Link to="/finalizacao"><Button variant="contained">Continuar</Button></Link>
        </Box>

      </Box>
    </Container>
  );
}