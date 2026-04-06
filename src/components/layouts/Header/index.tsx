import { ArrowBack, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, Container, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

type HeaderProps = {
  link: string;
};

export function Header({ link }: HeaderProps) {  
  return (
    <Container>
      <AppBar position="static" elevation={0} color="transparent" sx={{ width:'100%'}}>
       <Toolbar sx={{display:'flex',  justifyContent: 'space-between',}}>
          <Link to={link} style={{ textDecoration: 'none', color:'inherit' }}>        
            <IconButton color="inherit">
              <ArrowBack fontSize="large" />
            </IconButton>
          </Link>
          <Link to="/pedido" style={{ textDecoration: 'none' }}>
            <IconButton size="large" color="primary" sx={{marginRight:'10px'}}>
              <Badge badgeContent={17} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
       </Toolbar>
      </AppBar>
    </Container>
  );
}