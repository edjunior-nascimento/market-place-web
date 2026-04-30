import { Box, Button, Container, Divider, Modal, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { CardEntrega } from "../../components/layouts/CardEntrega";
import { Add, PlusOne } from "@mui/icons-material";
import { useState } from "react";
import { ModalEndereco } from "../../components/layouts/ModalEndereco";
import { CardPagamento } from "../../components/layouts/CardPagamento";
import { Link, useNavigate } from "react-router-dom";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";

export function PagamentoPage() {  
  
  const navigate = useNavigate();
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

        <BottomConfirmation onPrimario={()=> navigate('/troco')} onSecundario={()=> navigate('/entrega')}></BottomConfirmation>

      </Box>
    </Container>
  );
}