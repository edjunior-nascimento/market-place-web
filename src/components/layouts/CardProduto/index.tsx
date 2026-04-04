import { ArrowForward } from "@mui/icons-material";
import {Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";


type CardProdutoProps = {
  image?: string;
  title: string;
  description: string;
  price: string;
};


export function CardProduto(
{
  image,
  title,
  description,
  price,
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
            image={image?image:'./sem-img.png'}
            alt={title}
            sx={{ width: '100%', height: '100%' }}
          />
        </Box>

        <CardContent sx={{ padding:1, pt: 9}}>
          <Typography variant="h6" fontWeight="bold" lineHeight={1.1} sx={{display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical' , overflow: 'hidden'}}>
            {title}
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
            {description}
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
              {price}
            </Typography>

            <IconButton color="primary">
              <ArrowForward />
            </IconButton>
          </Box>
        </CardContent>
    </Card>

  );
}