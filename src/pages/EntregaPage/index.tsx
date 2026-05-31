import { Box, Button, Container, Divider, Modal, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { CardEntrega } from "../../components/layouts/CardEntrega";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { ModalEndereco } from "../../components/layouts/ModalEndereco";
import { useNavigate } from "react-router-dom";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";
import { EntregaType } from "../../types/entrega";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { adicionarEndereco } from "../../store/compra.slice";


export function EntregaPage() {  

    const dispatch = useAppDispatch();
  
    const [openModal, setOpenModal] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [endereco, setEndereco] = useState<EntregaType | undefined>(undefined);
    const navigate = useNavigate();

    const entregas = useAppSelector((state) => state.entregas.entregas);
    const handleSelecionar = (endereco: EntregaType) => {
      if (endereco) {
        dispatch(adicionarEndereco(endereco));
      }
      setSelected(endereco.id);
    }


  return (
    <Container sx={{padding:'10px'}}>
      <InputStepper posicao={1}></InputStepper>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: {xs: '0px', md: '150px'},
        }}
      >  
        <Box sx={{ display: 'flex', flexDirection: 'column', gap:'10px'}}>

          <Typography py={2} variant="h5">Endereço de Entrega</Typography>

          <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap:'10px'}}>
            {entregas.length !== 0 && (
              entregas.map((entrega) => (
                <CardEntrega
                  key={entrega.id}
                  codigo={entrega.id}
                  {...entrega}
                  selecionado={selected === entrega.id}
                  onSelecionar={() => handleSelecionar(entrega)}
                  onEditar={() => {setEndereco(entrega); setOpenModal(true);}}
                />
              ))
            )}
          </Box>
                  
        </Box>
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <Button variant="text"  onClick={() => {setEndereco(undefined); setOpenModal(true);}} sx={{color:'#00089C'}} startIcon={<Add />}>Adicionar Endereço</Button>
        </Box>

        <BottomConfirmation disabled={!selected} onPrimario={()=> navigate('/pagamento')} onSecundario={()=> navigate('/pedido')}></BottomConfirmation>

      </Box>
      <ModalEndereco 
        endereco={endereco} 
        open={openModal} 
        onClose={() => setOpenModal(false)}
        />
    </Container>
  );
}