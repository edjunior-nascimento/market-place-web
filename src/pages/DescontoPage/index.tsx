import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { InputStepper } from "../../components/feature/InputStepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";
import { Header } from "../../components/layouts/Header";
import DescontoService from "../../service/desconto.service";
import { DescontoType } from "../../types/desconto";
import { useAppDispatch } from "../../store/hooks";
import { adicionarDesconto } from "../../store/compra.slice";
import { ConfirmationNumberOutlined } from "@mui/icons-material";
import { CardCupom } from "../../components/layouts/CardCupom";

export function DescontoPage() {

  const [cupom, setCupom] = useState<string>('');
  const [desconto, setDesconto] = useState<DescontoType | null>(null);
  const [mensagem, setMensagem] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validarDesconto = (codigo: string) => {

    if (codigo) {
      setLoading(true);
      DescontoService.validarCupom(codigo)
        .then(response => {
          dispatch(adicionarDesconto(response.valorDesconto));
          setDesconto(response);
          setMensagem("");
        })
        .catch(error => {
          setDesconto(null);
          setMensagem("Cupom inválido ou expirado.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }



  return (
    <Container sx={{ padding: '10px' }}>
      <Header link="/pagamento" showCartButton={false} />
      <InputStepper posicao={2}></InputStepper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: { xs: '0px', md: '150px' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Box>
            <Typography py={2} variant="h5">Cupom de Desconto ?</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
            <TextField
              fullWidth
              id="desconto"
              value={cupom ? cupom : ''}
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
                    <Button variant="text" onClick={() => validarDesconto(cupom)}>Aplicar</Button>
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
          desconto && (
            <CardCupom desconto={desconto}></CardCupom>
          )}
        </Box>

        <BottomConfirmation onPrimario={() => navigate('/finalizacao')} onSecundario={() => navigate('/pagamento')}></BottomConfirmation>

      </Box>
    </Container>
  );
}