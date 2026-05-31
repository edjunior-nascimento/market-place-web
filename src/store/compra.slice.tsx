import { CompraType } from "../types/compra.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PedidoType } from "../types/pedido.type";
import { EntregaType } from "../types/entrega";
import { PagamentoEnum } from "../enum/pagamento.enum";
import { StatusEnum } from "../enum/status.enum";

export interface CompraState {
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
    loading: boolean,
    error: string | null
}

const initialState: CompraState = {
    pedido: [] as PedidoType[],
    endereco: {} as EntregaType,
    pagamento: {} as PagamentoEnum,
    troco: 0,
    cupom: "",
    subTotal: 0,
    taxa: 0,
    desconto: 0,
    total: 0,
    status: {} as StatusEnum,
    data: "",
    loading: false,
    error: null
};

const comprasSlice = createSlice({
name: "compras",
initialState,
    reducers: {
        adicionarPedido: (state, action: PayloadAction<PedidoType[]>) => {
            state.pedido = action.payload;
        },
        adicionarEndereco: (state, action: PayloadAction<EntregaType>) => {
            state.endereco = action.payload;
        },
        adicionarPagamento: (state, action: PayloadAction<PagamentoEnum>) => {
            state.pagamento = action.payload;
        },
        adicionarTroco: (state, action: PayloadAction<number>) => {
            state.troco = action.payload;
        },
        adicionarCupom: (state, action: PayloadAction<string>) => {
            state.cupom = action.payload;
        },
        adicionarSubTotal: (state, action: PayloadAction<number>) => {
            state.subTotal = action.payload;
        },
        adicionarTaxa: (state, action: PayloadAction<number>) => {
            state.taxa = action.payload;
        },
        adicionarDesconto: (state, action: PayloadAction<number>) => {
            state.desconto = action.payload;
        },
        adicionarTotal: (state, action: PayloadAction<number>) => {
            state.total = action.payload;
        },
        adicionarStatus: (state, action: PayloadAction<StatusEnum>) => {
            state.status = action.payload;
        },
        adicionarData: (state, action: PayloadAction<string>) => {
            state.data = action.payload;
        },
    }
});

export const { adicionarPedido, adicionarEndereco, adicionarPagamento, adicionarTroco, adicionarCupom, adicionarSubTotal, adicionarTaxa, adicionarDesconto, adicionarTotal, adicionarStatus, adicionarData } = comprasSlice.actions;
export default comprasSlice.reducer;
