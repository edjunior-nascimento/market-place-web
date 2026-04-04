import { Search } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";

export function InputSearch() {  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', gap:'5px', border:'1px solid #DDD'}} px={2} py={1}>
      <Search />
      <InputBase placeholder="Pesquisar" />
    </Box>
  );
}