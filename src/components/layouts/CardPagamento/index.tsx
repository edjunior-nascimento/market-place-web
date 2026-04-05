import { ArrowForward, CreditCard, Payments, Pix } from "@mui/icons-material";
import {Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { InputCounter } from "../../feature/InputCounter";


type CardPagamentoProps = {
  codigo: number;
  forma: 'cartao' | 'pix' | 'dinheiro';
  selecionado: boolean;
  onSelecionar: (codigo: number) => void;
};


export function CardPagamento({ codigo, forma, selecionado, onSelecionar }: CardPagamentoProps) {  
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
            
          border: selecionado ? '2px solid #B50303' : '2px solid transparent',
          cursor: 'pointer',

        }}
      >
      <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
        
        <Box sx={{display:"flex", flexDirection:'row', gap: '10px',alignItems: 'center' }}>
          {forma === 'cartao' && <CreditCard />}
          {forma === 'pix' && <Pix />}
          {forma === 'dinheiro' && <Payments />}
          <Typography variant="h6" lineHeight={1.1}>
            {forma === 'cartao' && 'Cartão de Crédito'}
            {forma === 'pix' && 'PIX'}
            {forma === 'dinheiro' && 'Dinheiro'}
          </Typography>
        </Box>
        <Typography variant="subtitle1" lineHeight={1}>
          {forma === 'cartao' && 'O entregador levará a maquininha de cartão no momento da entrega'}
          {forma === 'pix' && 'O pagamento deve ser feito imediatamente para proceguirmos com o pedido'}
          {forma === 'dinheiro' && 'O pagamento deverá ser realizado diretamente ao entregador na entrega'}
        </Typography>
      </Box>
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
        <Button 
          variant="contained" 
          color="primary"  
          sx={{
            background: selecionado? '#B50303':'#E2EAFA', 
            color: selecionado? '#FFFFFF':'#B50303', '&:hover': {background:'#E2EAFA'}
            
          }} 
          onClick={() => onSelecionar(codigo)}>{selecionado ? 'Selecionado' : 'Selecionar'}</Button>
      </Box>
    </Card>

  );
}