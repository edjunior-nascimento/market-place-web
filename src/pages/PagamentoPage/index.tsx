import { Box, Container, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useState } from "react";
import { CardPagamento } from "../../components/layouts/CardPagamento";
import { useNavigate } from "react-router-dom";
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

          <Box sx={{ 
                display: 'grid',
                gap:'10px',
                gridTemplateColumns: {xs: '1fr', md: 'repeat(auto-fit, minmax(250px, 1fr))'}
              }}>
            
              <CardPagamento codigo={1} forma={PagamentoEnum.CARTAO} selecionado={selected === PagamentoEnum.CARTAO} onSelecionar={() => handleSelecionar(PagamentoEnum.CARTAO)} />
              <CardPagamento codigo={2} forma={PagamentoEnum.PIX} selecionado={selected === PagamentoEnum.PIX} onSelecionar={() => handleSelecionar(PagamentoEnum.PIX)} />
              <CardPagamento codigo={3} forma={PagamentoEnum.DINHEIRO} selecionado={selected === PagamentoEnum.DINHEIRO} onSelecionar={() => handleSelecionar(PagamentoEnum.DINHEIRO)} />
            
          </Box>
                  

        </Box>

        <BottomConfirmation disabled={selected === null} onPrimario={()=> navigate('/finalizacao')} onSecundario={()=> navigate('/entrega')}></BottomConfirmation>

      </Box>
    </Container>
  );
}