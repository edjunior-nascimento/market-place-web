import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DescontoService from "../../../service/desconto.service";
import { DescontoType } from "../../../types/desconto.type";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { adicionarCupom } from "../../../store/compra.slice";
import { ConfirmationNumberOutlined } from "@mui/icons-material";
import { CardCupom } from "../CardCupom";

export function Desconto() {

  const [cupom, setCupom] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const compra = useAppSelector((state) => state.compra);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(compra.cupom && compra.cupom.codigo) {
      setCupom(compra.cupom.codigo);
    }}, []);

  const aplicarDesconto = (codigo: string) => {
    if (codigo) {
      setLoading(true);
      DescontoService.validarCupom(codigo)
        .then(response => {
          dispatch(adicionarCupom(response));
          setMensagem("");
        })
        .catch(error => {
          dispatch(adicionarCupom({}as DescontoType));
          setMensagem("Cupom inválido ou expirado.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <Box sx={{ width: '100%', display: "flex", flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
        <TextField
          fullWidth
          id="desconto"
          value={ cupom ? cupom : ''}
          helperText={mensagem}
          onChange={(e) => { setCupom(e.target.value.toUpperCase()); setMensagem(''); }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <ConfirmationNumberOutlined  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                <Button variant="text" onClick={() => aplicarDesconto(cupom)}>Aplicar</Button>
                </InputAdornment>
              )
            }
          }}
        />
      </Box>
      {loading? (
        <Typography variant="h6" align="center" mt={4}>
          Carregando...
        </Typography>
      ): 
      compra.cupom.codigo && (
        <CardCupom desconto={compra.cupom}></CardCupom>
      )}
    </Box>
  );
}