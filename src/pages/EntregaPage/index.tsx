import { Box, Button, Container, Divider, Modal, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { CardEntrega } from "../../components/layouts/CardEntrega";
import { Add, PlusOne } from "@mui/icons-material";
import { useState } from "react";
import { ModalEndereco } from "../../components/layouts/ModalEndereco";

export function EntregaPage() {  
  
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const entregas = [
      { codigo: 1, nome: 'João', telefone: '7199999-9999', endereco: 'Rua A', numero: '123', referencia: 'Perto do mercado' },
      { codigo: 2, nome: 'Maria', telefone: '7198888-8888', endereco: 'Rua B', numero: '456', referencia: 'Ao lado da escola' },
    ];


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
            {entregas.map((entrega) => (
              <CardEntrega
                key={entrega.codigo}
                {...entrega}
                selecionado={selected === entrega.codigo}
                onSelecionar={() => setSelected(entrega.codigo)}
                onEditar={handleOpen}
              />
            ))}
          </Box>
                  

        </Box>
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          <Button variant="text"  onClick={handleOpen} sx={{color:'#00089C'}} startIcon={<Add />}>Adicionar Endereço</Button>
        </Box>

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: {xs: 'space-between',md:'flex-end'}, gap:'10px'}} mt={2}>
          <Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Voltar</Button>
          <Button variant="contained">Continuar</Button>
        </Box>

      </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '50%', md: '50%' },
            left: { xs: '50%', md: '50%' },
            transform: { xs: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' },
          }}
        >
          <ModalEndereco onFechar={handleClose} onSalvar={handleClose}></ModalEndereco>
        </Box>
      </Modal>
    </Container>
  );
}