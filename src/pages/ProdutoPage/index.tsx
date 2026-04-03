import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import { Header } from "../../components/layouts/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { CheckboxOpcao } from "../../components/feature/CheckboxOpcao";
import { InputCounter } from "../../components/feature/InputCounter";
import { AddShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";

export function ProdutoPage() {  
  return (
    <Container>

      <Header />  
     
      <Swiper  
        modules={[Pagination]} 
        pagination={{ clickable: true }}
        slidesPerView={1}>
        <SwiperSlide>
          <Box component="img" sx={{width:'100vw', height: 300, objectFit: 'cover'}} src="/x-comida.jpg" alt="Logo Comércio" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" sx={{width:'100vw', height: 300, objectFit: 'cover'}} src="/x-comida2.jpg" alt="Logo Comércio" />
       </SwiperSlide>
      </Swiper>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap:'10px', p:2 }}>
        
        <Typography variant="h5">
          Camarão Com Legumes
        </Typography>
        
        <Typography>
          Arroz Integral ou Branco, Feijão, Salada e Legumes
        </Typography>
        
        <Box sx={{display:'flex', justifyContent: 'center'}}>
          <InputCounter
            min={1}
            max={5}
            initialValue={1}
            onChange={(value) => console.log(value)}
          />
        </Box>

        <Box sx={{display:'flex', flexDirection: 'column', gap: '3px'}}>          
          <CheckboxOpcao habilitado={true}>Arroz Branco</CheckboxOpcao>
          <CheckboxOpcao habilitado={true}>Arroz Grega</CheckboxOpcao>
          <CheckboxOpcao habilitado={true}>Macarrão</CheckboxOpcao>
          <CheckboxOpcao habilitado={true}>Feijão</CheckboxOpcao>
          <CheckboxOpcao habilitado={true}>Salada</CheckboxOpcao>
          <CheckboxOpcao habilitado={true}>Legumes</CheckboxOpcao>
          <CheckboxOpcao habilitado={true}>Molho</CheckboxOpcao>
        </Box>

        <InputBase sx={{p:2}} fullWidth placeholder="Observações" multiline minRows={3}/>

        <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}} mt={2}>
          <Button variant="contained" color="primary"  sx={{background:'#E2EAFA', color: '#B50303', '&:hover': {background:'#E2EAFA'}}}>Comprar</Button>
          <Button variant="contained"  startIcon={<AddShoppingCart />}>Adicionar ao Carrinho</Button>
        </Box>
      </Box>
    </Container>
  );
}