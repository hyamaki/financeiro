import { inject, injectable } from "tsyringe";
import { GoogleGenAI } from "@google/genai";
import { ICadastrarMovimentacaoService } from "../interfaces/cadastrar-movimentacao.interface";
import {
  IMovimentacaoService,
  MOVIMENTACAO_SERVICE_INTERFACE,
} from "../../../../domain/conta/interfaces/movimentacao-service.interface";
import { CadastrarMovimentacaoDTO } from "../dto/cadastrar-movimentacao.dto";
import { ca } from "zod/locales";
import { Movimentacao } from "../../../../domain/conta/entities/movimentacao";

@injectable()
export class CadastrarMovimentacaoService
  implements ICadastrarMovimentacaoService
{
  private iMovimentacaoService: IMovimentacaoService;

  constructor(
    @inject(MOVIMENTACAO_SERVICE_INTERFACE)
    iMovimentacaoService: IMovimentacaoService
  ) {
    this.iMovimentacaoService = iMovimentacaoService;
  }

  async executar(data: CadastrarMovimentacaoDTO): Promise<any> {
    console.log(data, new Date(data.data));
    // const ai = new GoogleGenAI({
    //   apiKey: process.env.GOOGLE_GEN_AI_API_KEY,
    // });

    // try {
    //   const message = data.descricao;
    //   const response = await ai.models.generateContent({
    //     model: "gemini-2.5-flash",
    //     contents:
    //       "Extraia as seguintes informações da mensagem e formate a saída como um objeto JSON." +
    //       'Mensagem: "' +
    //       message +
    //       '"' +
    //       "Informações a extrair:" +
    //       "- Data: A data e hora da transação. Se não for especificado, utilize a data e hora atual." +
    //       "- Tipo: Classifique a transação como despesa ou receita." +
    //       "- Titulo: Um título para a transação. Se não for especificado, use 'Pagamento' ou 'Recebimento'." +
    //       "- Descricao: O motivo do pagamento ou recebimento, por exemplo: 'Compra de {item}', 'Recebimento de {pessoa}'. Se não for especificado, use 'Novo pagamento' ou 'Novo recebimento'." +
    //       "- Valor: O valor numérico." +
    //       "- Categoria: Classifique o item." +
    //       "O JSON deve ter a seguinte estrutura:" +
    //       "{" +
    //       "  Data: string," +
    //       "  Tipo: string," +
    //       "  Titulo: string," +
    //       "  Descricao: string," +
    //       "  Valor: float," +
    //       "  Categoria: string," +
    //       "}",
    //   });
    //   console.log(response.text);
    // } catch (error) {
    //   console.log(error);
    // }
    // const movimentacao = {
    //   data: new Date().toISOString(),
    //   tipo: "DEBITO",
    //   titulo: "Pagamento de testes",
    //   descricao: "Descrição do pagamento de testes",
    //   valor: 99.99,
    //   categoria: "Alimentação",
    // };

    const dateUtcString = data.data + "T03:00:00.000Z";
    const dateObject = new Date(dateUtcString);
    console.log(dateObject);
    const movimentacao = new Movimentacao(
      dateObject,
      data.operacao,
      "Pagamento de testes",
      data.descricao,
      data.valor,
      "Alimentação"
    );
    const movimentacaoCriada = await this.iMovimentacaoService._salvar(
      movimentacao
    );

    return {};
  }
}
