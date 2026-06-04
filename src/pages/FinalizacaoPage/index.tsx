import { Box, Button, Card, Container, Divider, Typography } from "@mui/material";
import { CardPedido } from "../../components/layouts/CardPedido";
import { InputStepper } from "../../components/feature/InputStepper";
import { CardEntrega } from "../../components/layouts/CardEntrega";
import { CardPagamento } from "../../components/layouts/CardPagamento";
import { useNavigate } from "react-router-dom";
import { BottomConfirmation } from "../../components/layouts/BottomConfirmation";
import { Header } from "../../components/layouts/Header";
import { Desconto } from "../../components/layouts/Desconto";
import { useAppSelector } from "../../store/hooks";
import { ModalTroco } from "../../components/layouts/ModalTroco";
import { useEffect, useMemo, useState } from "react";
import { adicionarTotal } from "../../store/compra.slice";

export function FinalizacaoPage() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const pedidos = useAppSelector((state) => state.pedidos.pedidos);
  const compra = useAppSelector((state) => state.compra);

  useEffect(() => {
    if(compra.pedido.length === 0){
      navigate('/');
    }
  }, [])

  const handkeFinalizar = () => {
    if(compra.pagamento === "DINHEIRO") {
      setOpenModal(true);
    }else{
      navigate('/confirmacao');
    }
  }

  const total = useMemo(() => {
    let total = 0;
    const subTotal = compra.subTotal;
    const taxa = compra.taxa;
    const desconto = compra.cupom?.valorDesconto || 0;
    total = (subTotal + taxa) - desconto;
    adicionarTotal(total);
    return total;
  }, [compra.subTotal, compra.taxa, compra.cupom]);

  return (
    <Container sx={{ padding: '10px' }}>
      <Header link="/pagamento" showCartButton={false} />
      <InputStepper posicao={3}></InputStepper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          px: { xs: '0px', md: '150px' },
        }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography py={2} variant="h5">Pedidos</Typography>
          {
            pedidos.map((pedido) => (
              <CardPedido
                id={pedido.id}
                key={pedido.id}
                titulo={pedido.produto.nome}
                descricao={pedido.produto.descricao}
                quantidade={pedido.quantidade}
                preco={pedido.produto.preco}
                modoExibicao={true}
              />
            ))
          }
        </Box>

        <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '10px' }}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography py={2} variant="h5">Endereço de Entrega</Typography>
            <CardEntrega entrega={compra.endereco}  modoExibicao={true}/>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography py={2} variant="h5">Forma de Pagamento</Typography>
            <CardPagamento
              codigo={1}
              forma={compra.pagamento}
              modoExibicao={true}
            />
          </Box>

          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography py={2} variant="h5">Cupom de Desconto</Typography>
            <Desconto />
          </Box>
        </Box>

        <Card
          sx={{
            backgroundColor: '#ffffffDD',
            padding: '20px',
            marginTop: '20px',
            borderRadius: 4,
            boxShadow: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="Normal">
              SubTotal:
            </Typography>
            <Typography variant="h6">
              {compra.pedido.reduce((acc, pedido) => acc + pedido.precoTotal, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="Normal">
              Taxas:
            </Typography>
            <Typography variant="h6">
              {compra.taxa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight="Normal">
              Descontos:
            </Typography>
            <Typography variant="h6">
              {compra.cupom.valorDesconto ? compra.cupom.valorDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}
            </Typography>
          </Box>

          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" fontWeight="Normal">
              Total:
            </Typography>
            <Typography variant="h5">
              {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Typography>
          </Box>
        </Card>
        <BottomConfirmation onPrimario={handkeFinalizar} onSecundario={() => navigate('/pagamento')} nomePrimario="Confirmar"></BottomConfirmation>
      </Box>
      <ModalTroco 
        open={openModal} 
        onClose={() => setOpenModal(false)}
        onConfirmar={() => {
          setOpenModal(false);
          navigate('/confirmacao');
        }}
        />
    </Container>
  );
}