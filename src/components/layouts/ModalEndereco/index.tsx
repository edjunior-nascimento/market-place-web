import { ArrowForward } from "@mui/icons-material";
import {Box, Button, Card, CardContent, CardMedia, IconButton, TextField, Typography } from "@mui/material";
import { InputCounter } from "../../feature/InputCounter";


type CardPedidoProps = {
  nome?: string;
  telefone?: string;
  endereco?: string;
  numero?: string;
  referencia?: string;
  onFechar?: () => void;
  onSalvar?: () => void;
};


export function ModalEndereco(
{
  nome,
  telefone,
  endereco,
  numero,
  referencia,
  onFechar,
  onSalvar
}: CardPedidoProps
) {  
  return (
    
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
        <Typography py={2} variant="h5">Endereço de Entrega</Typography>

        <TextField fullWidth label="Nome do Destinatário" id="nome" value={nome}/>
        <TextField fullWidth label="Telefone" id="telefone" value={telefone}/>
        <TextField fullWidth label="Endereço" id="endereco" value={endereco}/>
        <TextField fullWidth label="Número" id="numero" value={numero}/>
        <TextField fullWidth label="Referência" id="referencia" value={referencia}/>

          <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end', gap:'10px'}} mt={2}>
            <Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}} onClick={onFechar}>Fechar</Button>
            <Button variant="contained" onClick={onSalvar}>Salvar</Button>
          </Box>
    </Card>

  );
}