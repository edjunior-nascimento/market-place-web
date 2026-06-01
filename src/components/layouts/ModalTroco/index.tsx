import { Box, Button, Checkbox, FormControlLabel, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

type CardPedidoProps = {
  open?: boolean;
  onConfirmar?: () => void;
  onClose?: () => void;
};

export function ModalTroco({ open = false, onClose, onConfirmar }: CardPedidoProps) {

  const [troco, setTroco] = useState<number>(0);
  const [semTroco, setSemTroco] = useState<boolean>(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: { xs: '0px', md: '150px' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Box>
            <Typography py={2} variant="h5">Troco</Typography>
            <Typography variant="subtitle1" lineHeight={1}>Informe o valor caso precise de troco</Typography>
          </Box>
          <Box>
            <TextField fullWidth label="Troco" id="troco" value={troco ? troco : ''} disabled={semTroco} sx={semTroco ? { opacity: 0.6 } : {}} onChange={(e) => setTroco(Number(e.target.value))} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FormControlLabel control={<Checkbox checked={semTroco} onChange={(e) => { setSemTroco(e.target.checked); if (e.target.checked) setTroco(0); }} />} label="Não Precisa de Troco" />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }} mt={2}>
          <Button variant="contained" onClick={onConfirmar} disabled={!(semTroco || troco > 0)}>Confirmar</Button>
        </Box>
      </Box>
    </Modal>
  );
}