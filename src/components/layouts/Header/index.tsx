import { ArrowBack, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, Container, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

type HeaderProps = {
  link: string;
  quantidadePedidos: number
};

export function Header({ link, quantidadePedidos }: HeaderProps) {  
  return (
    <Container sx={{paddingBottom:{ xs: '38px', md: '48px' },}}>
      <AppBar position="fixed" elevation={0} color="default" sx={{width:'100%', top:0, zIndex: 10 }}>
       <Toolbar sx={{display:'flex',  justifyContent: 'space-between',}}>
          <Link to={link} style={{ textDecoration: 'none', color:'inherit' }}>        
            <IconButton color="inherit">
              <ArrowBack />
            </IconButton>
          </Link>
          <Link to="/pedido" style={{ textDecoration: 'none' }}>
            <IconButton size="large" color="primary" sx={{marginRight:'10px'}}>
              <Badge badgeContent={quantidadePedidos} color="error">
                <ShoppingCartOutlined fontSize="small"/>
              </Badge>
            </IconButton>
          </Link>
       </Toolbar>
      </AppBar>
    </Container>
  );
}