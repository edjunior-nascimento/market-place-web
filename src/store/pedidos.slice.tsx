import { PedidoType } from "../types/pedido.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PedidoState {
    pedidos: PedidoType[],
    loading: boolean,
    error: string | null
}

const initialState: PedidoState = {
  pedidos: [],
  loading: false,
  error: null
};

const pedidosSlice = createSlice({
  name: "pedidos",
  initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<PedidoType>) => {
            state.pedidos.push(action.payload);
        },
        atualizar: (state, action: PayloadAction<PedidoType>) => {
            const index = state.pedidos.findIndex(pedido => pedido.id === action.payload.id);
            if (index !== -1) {
                state.pedidos[index] = action.payload;
            }
        },
        remover: (state, action: PayloadAction<string>) => {
            state.pedidos = state.pedidos.filter(pedido => pedido.id !== action.payload);
        },
        atualizarValorTotal: (state, action: PayloadAction<{ id: string; quantidade: number, valorTotal: number }>) => {
            const item = state.pedidos.find(pedido => pedido.id === action.payload.id);
            if (item) {
                item.quantidade = action.payload.quantidade;
                item.precoTotal = action.payload.valorTotal;
            }
        }
    }
});

export const { adicionar, atualizar, remover, atualizarValorTotal} = pedidosSlice.actions;
export default pedidosSlice.reducer;
