import { ArrowForward } from "@mui/icons-material";
import {Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";


type CardProdutoProps = {
  imagem?: string;
  nome: string;
  descricao: string;
  preco: string;
  onClick?: () => void;
};


export function CardProduto(
{
  imagem,
  nome,
  descricao,
  preco,
  onClick,
}: CardProdutoProps
) {  
  return (
      <Card
          sx={{
            maxWidth: 210,
            borderRadius: 4,
            backgroundColor: '#ffffffDD',
            position: 'relative',
            overflow: 'visible',
            boxShadow: 0,
            marginTop: 13,
          }}
          onClick={onClick}
        >
          
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: 3,
              overflow: 'hidden',
              width: 160,
              height: 160,
            }}
          >
            <CardMedia
              component="img"
              image={imagem?imagem:'./sem-img.png'}
              alt={nome}
              sx={{ width: '100%', height: '100%' }}
            />
          </Box>

          <CardContent sx={{ padding:1, pt: 9}}>
            <Typography variant="h6" fontWeight="bold" lineHeight={1.1} sx={{display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical' , overflow: 'hidden'}}>
              {nome}
            </Typography>

            <Typography
              variant="subtitle1"
              lineHeight={1}
              sx={{
                mt: 1, 
                display:'-webkit-box', 
                WebkitLineClamp:3, 
                WebkitBoxOrient:'vertical', 
                overflow: 'hidden'
              }}
            >
              {descricao}
            </Typography>

            <Box
              sx={{
                p: 0,
                mt: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {preco}
              </Typography>

              <IconButton color="primary">
                <ArrowForward />
              </IconButton>
            </Box>
          </CardContent>
      </Card>
  );
}