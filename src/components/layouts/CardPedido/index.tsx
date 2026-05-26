import {Box, Button, Card, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { InputCounter } from "../../feature/InputCounter";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { atualizarValorTotal, remover } from "../../../store/pedidos.slice";


type CardPedidoProps = {
  id: string;
  imagem?: string;
  titulo: string;
  descricao: string;
  quantidade: number;
  preco: number;
  modoExibicao?: boolean;
};


export function CardPedido(
{ 
  id,
  imagem,
  titulo,
  descricao,
  quantidade,
  preco,
  modoExibicao = false,
}: CardPedidoProps
) {  
  
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [quant, setQuant] = useState(quantidade);
  const [valor, setValor] = useState(preco * quantidade);
  
  useEffect(() => {
    setValor(preco * quant);

    if(quant !== 0){
      dispatch(atualizarValorTotal({ 
        id: id, 
        quantidade: quant, 
        valorTotal: preco * quant }));
    }

  }, [quant]);

  return (
    
    <Card
        sx={{
          width: '100%',
          borderRadius: 4,
          backgroundColor: '#ffffffDD',
          boxShadow: 0,
          display: 'flex',
          flexDirection: 'row',
          padding: '5px',
          gap: '10px',
        }}
      >
        <Box>
          <CardMedia
            component="img"
            image={imagem?imagem:'./sem-img.png'}
            alt={titulo}
            sx={{ width: '100px', height: '100px' }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding:'5px', gap:'20px'}}>
          <Box sx={{display:'flex', flexDirection:'column', gap:'5px'}}>
            <Typography variant="h6" lineHeight={1.1}>
              {titulo}
            </Typography>
            <Typography variant="subtitle1" lineHeight={1}>
              {descricao}
            </Typography>
          </Box>

          <Box
            sx={{
              p: 0,
              mt: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {modoExibicao ? (
              <Typography variant="subtitle1">
                Quant.: {quant}
              </Typography>
            ) : (
              <InputCounter min={0} initialValue={quant}  onChange={(value) => {if(value === 0){setOpen(true);}else{setQuant(value)}}}/>
            )}
            <Typography variant="h6" fontWeight="bold">
              {valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography>
          </Box>
        </Box>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Remover Pedido
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{color:'#000'}}>
              Tem certeza de que deseja remover este pedido?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => {setOpen(false);}}>
              Cancelar
            </Button>
            <Button onClick={() => { dispatch(remover(id)); setOpen(false); }}>Confirmar</Button>
          </DialogActions>
        </Dialog>
    </Card>

  );
}