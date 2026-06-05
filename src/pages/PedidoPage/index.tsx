import { Box, Button, Container, Divider, InputBase, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { PedidoType } from "../../types/pedido.type";
import { useEffect, useMemo, useState } from "react";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";
import { adicionarObservacao, adicionarPedido, adicionarSubTotal } from "../../store/compra.slice";
import { Header } from "../../components/layouts/Header";



export function PedidoPage() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const pedidos = useAppSelector((state) => state.pedidos.pedidos);
  const [observacao, setObservacao] = useState("");
  const compra = useAppSelector((state) => state.compra);

  const subTotal = useMemo(() => {
    return pedidos.reduce((total, pedido) => total + pedido.precoTotal, 0);
  }, [pedidos]);

  useEffect(() => {
    if (compra.observacao) {
      setObservacao(compra.observacao);
    }
  }, []);

  const handleContinuar = () => {
    if (pedidos.length > 0) {
      dispatch(adicionarPedido([...pedidos]));
      dispatch(adicionarSubTotal(subTotal));
      dispatch(adicionarObservacao(observacao));
      navigate('/entrega');
    }
  }

  return (
    <Container sx={{ padding: '10px' }}>
      <Header link="/" showCartButton={false} />
      <InputStepper posicao={0}></InputStepper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: { xs: '0px', md: '150px' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

          <Typography py={2} variant="h5">Pedidos</Typography>

          <Box>
            {pedidos.length === 0 ? (
              <Typography variant="h6" align="center" mt={4}>
                Nenhum pedido selecionado.
              </Typography>
            ) : (
              pedidos.map((pedido) => (
                <CardPedido
                  id={pedido.id}
                  key={pedido.id}
                  titulo={pedido.produto.nome}
                  descricao={pedido.produto.descricao}
                  quantidade={pedido.quantidade}
                  preco={pedido.produto.preco}
                />
              ))
            )}



          </Box>
        </Box>
        {pedidos.length > 0 && (
          <InputBase
            sx={{
              p: 2,
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.2)',
            }}
            fullWidth
            placeholder="Observações"
            multiline
            minRows={3}
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />
        )}
        <Divider sx={{ my: 2 }} />

        {pedidos.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6" fontWeight="Normal">
              SubTotal
            </Typography>

            <Typography variant="h6">
              {subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography>

          </Box>
        )}

        <BottomConfirmation disabled={pedidos.length === 0} onPrimario={handleContinuar} onSecundario={() => navigate('/')}></BottomConfirmation>

      </Box>
    </Container>
  );
}