import {Box, Button, Card, Typography } from "@mui/material";

type BottomConfirmationProps = {
  nomePrimario?: string;
  nomeSecundario?: string;
  onPrimario?: () => void;
  onSecundario?: () => void;
  disabled?: boolean;
};

export function BottomConfirmation(
{
  nomePrimario='Continuar',
  nomeSecundario='Voltar',
  onPrimario,
  onSecundario,
  disabled = false,
}: BottomConfirmationProps
) { 
  return (
    <Box sx={{
      display:'flex', 
      flexDirection: 'row', 
      justifyContent: {xs: 'space-between', md:'flex-end'}, 
      gap:'10px'
      }} 
      mt={2}>
      <Button 
        variant="contained" 
        color="primary"  
        sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}
        onClick={onSecundario}
      >
        {nomeSecundario}
      </Button>
      <Button 
        variant="contained"
        onClick={onPrimario}
        disabled={disabled}
        >
        {nomePrimario}
      </Button>
    </Box>
  );
}