import { ArrowBack, ShoppingCartOutlined } from "@mui/icons-material";
import { AppBar, Badge, Container, IconButton, Toolbar } from "@mui/material";

export function Header() {  
  return (
    <Container>
      <AppBar position="static" elevation={0} color="transparent" sx={{ width:'100%'}}>
       <Toolbar sx={{display:'flex',  justifyContent: 'space-between',}}>
          <IconButton color="inherit">
            <ArrowBack fontSize="large" />
          </IconButton>
          <IconButton size="large" color="primary" sx={{marginRight:'10px'}}>
            <Badge badgeContent={17} color="error">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
       </Toolbar>
      </AppBar>
    </Container>
  );
}