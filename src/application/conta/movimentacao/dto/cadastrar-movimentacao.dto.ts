import { z } from "zod";

export const CadastrarMovimentacaoSchema = z.object({
  descricao: z.string().min(3).max(255).trim(),
  operacao: z.string().min(3).max(255).trim(),
  valor: z.number().min(0.01),
  data: z
    // .string()
    // .regex(/^\d{4}-\d{2}-\d{2}$/, "O formato da data deve ser YYYY-MM-DD")
    .transform((stringData, ctx) => {
      console.log("passando por aqui", stringData);
      const dateUtcString = stringData + "T03:00:00.000Z";
      const dateObject = new Date(dateUtcString);
      if (isNaN(dateObject.getTime())) {
        return z.NEVER;
      }
      console.log("data", dateObject, dateUtcString);
      return dateObject;
    }),
});

export type CadastrarMovimentacaoDTO = z.infer<
  typeof CadastrarMovimentacaoSchema
>;
