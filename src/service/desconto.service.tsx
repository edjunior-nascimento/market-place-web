import { get } from "http";
import { ProdutoType } from "../types/produto.type";
import api from "./api";
import { DescontoType } from "../types/desconto";

const DescontoService = {
    validarCupom(codigo: string): Promise<DescontoType> {
        return api.get<DescontoType>(`/cupons/${codigo}`).then((res:any) => res.data.data)
    }
}

export default DescontoService;