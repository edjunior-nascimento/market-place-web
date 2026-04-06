import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useState } from "react";
import { Link } from "react-router-dom";

export function TrocoPage() {  

  const [troco, setTroco] = useState<number>(0);
  
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
            <Typography py={2} variant="h5">Troco</Typography>
            <Typography variant="subtitle1" lineHeight={1}>Informe o valor caso precise de troco</Typography>
          </Box>

          <Box>
            <TextField fullWidth label="Troco" id="troco" value={troco?troco:''} onChange={(e) => setTroco(Number(e.target.value))}/>
            <Box sx={{display: 'flex', justifyContent:'flex-end'}}>
              <FormControlLabel control={<Checkbox />} label="Não Precisa de Troco" />
            </Box>
          </Box>
                  

        </Box>

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: {xs: 'space-between',md:'flex-end'}, gap:'10px'}} mt={2}>
          <Link to="/pagamento"><Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Voltar</Button></Link>
          <Link to="/desconto"><Button variant="contained">Continuar</Button></Link>
        </Box>

      </Box>
    </Container>
  );
}