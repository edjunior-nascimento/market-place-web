import { ArrowForward } from "@mui/icons-material";
import {Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { InputCounter } from "../../feature/InputCounter";


type CardEntregaProps = {
  codigo: number;
  nome: string;
  telefone: string;
  endereco: string;
  numero: string;
  referencia: string;
  selecionado?: boolean;
  modoExibicao?: boolean;
  
  onEditar?: () => void;
  onSelecionar?: (codigo: number) => void;

};


export function CardEntrega(
{
  codigo,
  nome,
  telefone,
  endereco,
  numero,
  referencia,  
  selecionado,
  modoExibicao = false,
  onEditar,
  onSelecionar,
}: CardEntregaProps
) {  
  return (
    
    <Card
        sx={{
          width: { xs: '100%', md: '400px' },
          borderRadius: 4,
          backgroundColor: '#ffffffDD',
          boxShadow: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          gap: '20px',
          height: 'stretch',
            
          border: selecionado ? '2px solid #B50303' : '2px solid transparent',
          cursor: 'pointer',
        }}
      >
      <Box sx={{display:'flex', flexDirection:'column', gap:'5px'}}>
        <Typography variant="h6" lineHeight={1.1}>
          {nome}
        </Typography>
        <Typography variant="subtitle1" lineHeight={1}>
          {telefone}
        </Typography>
        <Typography variant="subtitle1" lineHeight={1}>
          {endereco}, {numero}
        </Typography>
        <Typography variant="subtitle1" lineHeight={1}>
          {referencia}
        </Typography>
      </Box>

      {!modoExibicao && (
      <Box
        sx={{
          px: 0,
          mt: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '10px',
        }}
      >
        <Button variant="text" sx={{color:'#00089C'}} onClick={onEditar}>Editar</Button>
        <Button 
          variant="contained" 
          color="primary"  
          sx={{
            background: selecionado? '#B50303':'#E2EAFA', 
            color: selecionado? '#FFFFFF':'#B50303', '&:hover': {background:'#E2EAFA'}
            
          }} 
          onClick={() => onSelecionar?.(codigo)}>{selecionado ? 'Selecionado' : 'Selecionar'}</Button>
      </Box>
      )}
    </Card>

  );
}