import { Box, Container, Typography} from "@mui/material";
import { Header } from "../../components/layouts/Header";
import { ButtonRadio } from "../../components/feature/ButtonRadio";
import { CardProduto } from "../../components/layouts/CardProduto";
import { InputSearch } from "../../components/feature/InputSearch";

export function ComercioPage() {  
  return (
    <Container sx={{padding:'10px'}}>
      <Header link="/" />
      <Box sx={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        px: {xs: '0px', md: '150px'},
      }}>
        <Box sx={{display:"flex", justifyContent: 'space-between'}} m={1}>
          <Box>
            <Typography variant="h5" component="h5">MacDonald’s</Typography>
            <Box sx={{display:'flex', flexDirection: 'row'}}><Typography>Aberto</Typography><Typography> · Fecha 15:00</Typography></Box>
            <Typography>Rua Amorizinete 302 - Centro</Typography>
            <Typography>(88) 99999-9999</Typography>
          </Box>
          <Box>
            <Box component="img" sx={{maxWidth:'62px'}} src="./sem-img-comercio.png" alt="Logo Comércio" />
          </Box>
        </Box>
        
        <InputSearch></InputSearch>

        <Box sx={{display:'flex', flexDirection: 'row', overflowX: 'auto', gap: '10px', scrollbarWidth: 'none'}} px={1} py={2}>
          <ButtonRadio />
          <ButtonRadio />
          <ButtonRadio />
          <ButtonRadio />
          <ButtonRadio />
          <ButtonRadio />
          <ButtonRadio />
          <ButtonRadio />
          <ButtonRadio />
        </Box>

        <Box>
          <Typography py={2} variant="h5">Pratos do Dia</Typography>
          <Box
           sx={{
            display: {xs: 'grid', md: 'flex'},
            flexWrap: {xs: 'nowrap', md: 'wrap'},
            gridTemplateColumns: {xs: '2fr 2fr', md: '1fr'},
            gap: '10px',
            padding: '1rem',
          }}
        >
          
            <CardProduto
              title="Prato de Camarão com legumes e arroz Prato de Camarão com legumes e arroz"
              description="O prato vem com arroz, cenoura, verduras, camarão com molho O prato vem com arroz, cenoura, verduras, camarão com molho..."
              price="R$ 20,00"
            />

            <CardProduto
              title="Prato de Camarão com legumes e arroz Prato de Camarão com legumes e arroz"
              description="O prato vem com arroz, cenoura, verduras, camarão com molho O prato vem com arroz, cenoura, verduras, camarão com molho..."
              price="R$ 20,00"
            />
                
            <CardProduto
              title="Prato de Camarão com legumes e arroz Prato de Camarão com legumes e arroz"
              description="O prato vem com arroz, cenoura, verduras, camarão com molho O prato vem com arroz, cenoura, verduras, camarão com molho..."
              price="R$ 20,00"
            />

            <CardProduto
              title="Prato de Camarão com legumes e arroz Prato de Camarão com legumes e arroz"
              description="O prato vem com arroz, cenoura, verduras, camarão com molho O prato vem com arroz, cenoura, verduras, camarão com molho..."
              price="R$ 20,00"
            />

            <CardProduto
              title="Prato de Camarão"
              description="O prato vem com arroz, cenoura, verduras, camarão com molho O prato vem com arroz, cenoura, verduras, camarão com molho..."
              price="R$ 20,00"
            />
          </Box>
        </Box>

      </Box>
    </Container>
  );
}