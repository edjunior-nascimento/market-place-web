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
import { useAppDispatch } from "../../store/hooks";
import { adicionarPagamento } from "../../store/compra.slice";
import { PagamentoEnum } from "../../enum/pagamento.enum";
import { Header } from "../../components/layouts/Header";

export function PagamentoPage() {  

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<PagamentoEnum | null>(null);
  
  const handleSelecionar = (pagamento: PagamentoEnum) => {
    dispatch(adicionarPagamento(pagamento));
    setSelected(pagamento);
  }

  return (
    <Container sx={{padding:'10px'}}>
      <Header link="/entrega" showCartButton={false}/>
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
            
              <CardPagamento codigo={1} forma="cartao" selecionado={selected === PagamentoEnum.CARTAO_CREDITO} onSelecionar={() => handleSelecionar(PagamentoEnum.CARTAO_CREDITO)} />
              <CardPagamento codigo={2} forma="pix" selecionado={selected === PagamentoEnum.PIX} onSelecionar={() => handleSelecionar(PagamentoEnum.PIX)} />
              <CardPagamento codigo={3} forma="dinheiro" selecionado={selected === PagamentoEnum.DINHEIRO} onSelecionar={() => handleSelecionar(PagamentoEnum.DINHEIRO)} />
            
          </Box>
                  

        </Box>

        <BottomConfirmation disabled={selected === null} onPrimario={()=> selected === PagamentoEnum.DINHEIRO ? navigate('/troco') : navigate('/desconto')} onSecundario={()=> navigate('/entrega')}></BottomConfirmation>

      </Box>
    </Container>
  );
}