import { get } from "http";
import { ProdutoType } from "../types/produto.type";
import api from "./api";
import { CompraType } from "../types/compra.type";

const WhatsappService = (compra: CompraType) => {

    const numero = "5588999076960";

    const padRight = (str: string, length: number) => {
        return str.length >= length
            ? str.substring(0, length)
            : str + " ".repeat(length - str.length);
    };

    const itensTabela = compra.pedido.map(item => {
        const nome = padRight(item.produto.nome, 20);
        const qtd = padRight(String(item.quantidade), 3);
        const valor = padRight(item.produto.preco.toFixed(2), 7);
        const total = padRight((item.precoTotal).toFixed(2), 7);

        const componentes = (item.produto.componentes ?? []).join(", ");

        return `${nome} ${qtd} ${valor} ${total} \n ( ${componentes} )`;
    })
        .join("\n");


    const mensagem = `
*NOVO PEDIDO*

Nome: ${compra.endereco.nome.toUpperCase()}
Endereço: ${compra.endereco.endereco}, ${compra.endereco.numero}
Referência: ${compra.endereco.referencia}

────────────────────
\`\`\`
Produto              Qtd  Valor   Total
--------------------------------------
${itensTabela}
--------------------------------------
\`\`\`

Subtotal: R$ ${(compra.subTotal ?? 0).toFixed(2)}
Taxas: R$ ${(compra.taxas ?? 0).toFixed(2)}
Desconto: R$ ${(compra.cupom?.valorDesconto ?? 0).toFixed(2)}
────────────────────
*TOTAL: R$ ${(compra.total ?? 0).toFixed(2)}*

Pagamento: *${compra.pagamento}*
Troco para: R$ ${(compra.troco ?? 0).toFixed(2)}

Observação: ${compra.observacao || ""}
`;

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

export default WhatsappService;