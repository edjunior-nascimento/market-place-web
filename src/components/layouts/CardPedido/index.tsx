import { ArrowForward } from "@mui/icons-material";
import {Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { InputCounter } from "../../feature/InputCounter";


type CardPedidoProps = {
  imagem?: string;
  titulo: string;
  descricao: string;
  quantidade: string;
  preco: string;
};


export function CardPedido(
{
  imagem,
  titulo,
  descricao,
  quantidade,
  preco
}: CardPedidoProps
) {  
  return (
    
    <Card
        sx={{
          width: '100%',
          borderRadius: 4,
          backgroundColor: '#ffffffDD',
          boxShadow: 0,
          display: 'flex',
          flexDirection: 'row',
          padding: '5px',
          gap: '10px',
        }}
      >
        <Box>
          <CardMedia
            component="img"
            image={imagem?imagem:'./sem-img.png'}
            alt={titulo}
            sx={{ width: '100px', height: '100px' }}
          />
        </Box>
         

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding:'5px', gap:'20px'}}>
          <Box sx={{display:'flex', flexDirection:'column', gap:'5px'}}>
            <Typography variant="h6" lineHeight={1.1}>
              {titulo}
            </Typography>
            <Typography variant="subtitle1" lineHeight={1}>
              {descricao}
            </Typography>
          </Box>

          <Box
            sx={{
              p: 0,
              mt: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <InputCounter min={1} initialValue={parseInt(quantidade)}/>
            <Typography variant="h6" fontWeight="bold">
              {preco}
            </Typography>
          </Box>
        </Box>
    </Card>

  );
}