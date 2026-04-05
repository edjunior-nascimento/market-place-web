import { Box, Button, Container, Divider, Modal, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { CardEntrega } from "../../components/layouts/CardEntrega";
import { Add, PlusOne } from "@mui/icons-material";
import { useState } from "react";
import { ModalEndereco } from "../../components/layouts/ModalEndereco";
import { CardPagamento } from "../../components/layouts/CardPagamento";

export function PagamentoPage() {  
  
  const [selected, setSelected] = useState<number | null>(null);

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

          <Typography py={2} variant="h5">Forma de Pagamento</Typography>

          <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap:'10px'}}>
            
              <CardPagamento codigo={1} forma="cartao" selecionado={selected === 1} onSelecionar={setSelected} />
              <CardPagamento codigo={2} forma="pix" selecionado={selected === 2} onSelecionar={setSelected} />
              <CardPagamento codigo={3} forma="dinheiro" selecionado={selected === 3} onSelecionar={setSelected} />
            
          </Box>
                  

        </Box>

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: {xs: 'space-between',md:'flex-end'}, gap:'10px'}} mt={2}>
          <Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Voltar</Button>
          <Button variant="contained">Continuar</Button>
        </Box>

      </Box>
    </Container>
  );
}