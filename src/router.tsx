import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ComercioPage } from "./pages/ComercioPage";
import { PedidoPage } from "./pages/PedidoPage";
import { EntregaPage } from "./pages/EntregaPage";
import { PagamentoPage } from "./pages/PagamentoPage";
import { TrocoPage } from "./components/layouts/ModalTroco";
import { FinalizacaoPage } from "./pages/FinalizacaoPage";
import { ConfirmacaoPage } from "./pages/ConfirmacaoPage";
import { ProdutoPage } from "./pages/ProdutoPage";
import { AnimatePresence } from "framer-motion";

function RouterApp() {
    
    const location = useLocation();

    return (
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<ComercioPage />}/>
                    <Route path="/produto/:produtoId" element={<ProdutoPage />}/>
                    <Route path="/pedido" element={<PedidoPage />} />
                    <Route path="/entrega" element={<EntregaPage />} />
                    <Route path="/pagamento" element={<PagamentoPage />} />
                    <Route path="/finalizacao" element={<FinalizacaoPage />} />
                    <Route path="/confirmacao" element={<ConfirmacaoPage />} />
                </Routes>
            </AnimatePresence>
    )
}

export default RouterApp;