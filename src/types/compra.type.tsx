import { EntregaType } from "./entrega";
import { PedidoType } from "./pedido.type";
import { PagamentoEnum } from "../enum/pagamento.enum";
import { StatusEnum } from "../enum/status.enum";

export interface CompraType {
    id: string,
    pedido: PedidoType[],
    endereco: EntregaType,
    pagamento: PagamentoEnum,
    troco: number,
    cupom: string,
    subTotal: number,
    taxa: number,
    desconto: number,
    total: number,
    status: StatusEnum,
    data: string
}
