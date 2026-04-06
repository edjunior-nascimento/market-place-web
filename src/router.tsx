import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ComercioPage } from "./pages/ComercioPage";
import { ProdutoPage } from "./pages/ProdutoPage";
import { PedidoPage } from "./pages/PedidoPage";
import { ConfirmacaoPage } from "./pages/ConfirmacaoPage";
import { EntregaPage } from "./pages/EntregaPage";
import { PagamentoPage } from "./pages/PagamentoPage";
import { TrocoPage } from "./pages/TrocoPage";
import { DescontoPage } from "./pages/DescontoPage";
import { FinalizacaoPage } from "./pages/FinalizacaoPage";

function RouterApp(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComercioPage />} />
                <Route path="/produto" element={<ProdutoPage />} />
                <Route path="/pedido" element={<PedidoPage />} />
                <Route path="/entrega" element={<EntregaPage />} />
                <Route path="/pagamento" element={<PagamentoPage />} />
                <Route path="/troco" element={<TrocoPage />} />
                <Route path="/desconto" element={<DescontoPage />} />
                <Route path="/fincalizacao" element={<FinalizacaoPage />} />
                <Route path="/Confirmacao" element={<ConfirmacaoPage />} />
            </Routes>
       </BrowserRouter>
    )
}

export default RouterApp;