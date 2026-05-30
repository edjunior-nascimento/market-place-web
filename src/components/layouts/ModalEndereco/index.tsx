import { Box, Button, Card, Modal, TextField, Typography } from "@mui/material";
import { EntregaType } from "../../../types/entrega";
import { useAppDispatch } from "../../../store/hooks";
import { adicionar, atualizar, remover } from "../../../store/entrega.slice";
import { v4 as uuid } from 'uuid';
import { Close } from "@mui/icons-material";
import { DialogConfirmation } from "../../feature/DialogConfirmation";
import { useEffect, useState } from "react";

type CardPedidoProps = {
  endereco?: EntregaType;
  open?: boolean;
  onClose?: () => void;
};

export function ModalEndereco(
{
  endereco = {} as EntregaType,
  open = false,
  onClose
}: CardPedidoProps
) {  
  const [openDialog, setOpenDialog] = useState(false);
  const [formEndereco, setFormEndereco] = useState<EntregaType>(endereco);

  useEffect(() => {
    if (open) {
      setFormEndereco(endereco);
    }
  }, [open]);

  const dispatch = useAppDispatch();

  const handleSalvar = () => {
    if(isFormValid) { //se tiver preenchido, salva
      if(formEndereco.id) { //se tiver id, é atualização
        dispatch(
          atualizar({
            ...formEndereco
          })
        );
      }else{ // se não tiver id, é adição
        dispatch(
          adicionar({
            ...formEndereco,
            id: uuid()
          })
        );
      }

    }
    onClose && onClose();
  }

  const isFormValid = !!(
    formEndereco.nome?.trim() &&
    formEndereco.telefone?.trim() &&
    formEndereco.endereco?.trim() &&
    formEndereco.numero?.trim()
  );

  return (
      <Modal
        open={open}
        onClose={onClose}
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
          <Card
              sx={{
                width: '400px',
                backgroundColor: '#F5F5F5',
                boxShadow: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                gap: '20px',
              }}
            >
              <Box sx={{display:'flex', flexDirection: 'column'}}>
                <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%'}} onClick={onClose}>
                  <Close sx={{ cursor: 'pointer' }} />
                </Box>
                <Typography py={2} variant="h5">Endereço de Entrega</Typography>
              </Box>

              <TextField fullWidth label="Nome do Destinatário" id="nome" value={formEndereco.nome} onChange={(e) => setFormEndereco({...formEndereco, nome: e.target.value})} />
              <TextField fullWidth label="Telefone" id="telefone" value={formEndereco.telefone} onChange={(e) => setFormEndereco({...formEndereco, telefone: e.target.value})}/>
              <TextField fullWidth label="Endereço" id="endereco" value={formEndereco.endereco} onChange={(e) => setFormEndereco({...formEndereco, endereco: e.target.value})}/>
              <TextField fullWidth label="Número" id="numero" value={formEndereco.numero} onChange={(e) => setFormEndereco({...formEndereco, numero: e.target.value})}/>
              <TextField fullWidth label="Referência" id="referencia" value={formEndereco.referencia} onChange={(e) => setFormEndereco({...formEndereco, referencia: e.target.value})}/>

              <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}} mt={2}>
                <Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}} onClick={() => setOpenDialog(true)}>Excluir</Button>
                <Button variant="contained" onClick={handleSalvar} disabled={!isFormValid}>Salvar</Button>
              </Box>

          </Card>
          <DialogConfirmation
            titulo="Remover Endereço"
            descricao="Tem certeza de que deseja remover este endereço?"
            open={openDialog}
            onConfirmar={() => { dispatch(remover(endereco.id)); setOpenDialog(false); onClose && onClose(); }}
            onCancelar={() => setOpenDialog(false)}
          />
        </Box>
      </Modal>
  );
}