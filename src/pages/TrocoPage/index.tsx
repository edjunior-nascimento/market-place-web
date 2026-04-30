import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";

export function TrocoPage() {  

  const [troco, setTroco] = useState<number>(0);
  const navigate = useNavigate();
  
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

        <BottomConfirmation onPrimario={()=> navigate('/desconto')} onSecundario={()=> navigate('/pagamento')}></BottomConfirmation>

      </Box>
    </Container>
  );
}