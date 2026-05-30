import { EntregaType } from "../types/entrega";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EntregaState {
    entregas: EntregaType[],
    loading: boolean,
    error: string | null
}

const initialState: EntregaState = {
entregas: [],
loading: false,
error: null
};

const entregasSlice = createSlice({
name: "entregas",
initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<EntregaType>) => {
            state.entregas.push(action.payload);
        },
        atualizar: (state, action: PayloadAction<EntregaType>) => {
            const index = state.entregas.findIndex(entrega => entrega.id === action.payload.id);
            if (index !== -1) {
                state.entregas[index] = action.payload;
            }
        },
        remover: (state, action: PayloadAction<string>) => {
            state.entregas = state.entregas.filter(entrega => entrega.id !== action.payload);
        },
    }
});

export const { adicionar, atualizar, remover } = entregasSlice.actions;
export default entregasSlice.reducer;
