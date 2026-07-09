import type { Transacao } from "../../types/Transacao";
import { useNavigate } from "react-router-dom";

interface TabelaTransacaoProps {
  transacoes: Transacao[];
  nomePessoa: string;
}

export default function TabelaTransacao({
  transacoes,
  nomePessoa,
}: TabelaTransacaoProps) {

  const navigate = useNavigate();

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#DD716B]">
          Transações de {nomePessoa}
        </h2>

        <button
        onClick={() => navigate("/")}
        className="rounded bg-[#daf0be] px-4 py-2 font-bold text-[#DD716B] hover:text-[#9FC76B] hover:cursor-pointer">
          Voltar para o Início
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-300">
        <table className="w-full border-collapse">
          <tbody>
            {transacoes.length === 0 ? (
              <tr>
                <td className="p-6 text-center text-gray-500">
                  Nenhuma transação cadastrada.
                </td>
              </tr>
            ) : (
              transacoes.map((transacao) => (
                <tr key={transacao.id} className="border-b last:border-b-0">
                  <td className="flex items-center justify-between p-4">
                    <div>
                      <strong>{transacao.descricao}</strong>
                      <p className="text-sm text-gray-500">
                        {transacao.tipo}
                      </p>
                    </div>

                    <span className="font-semibold">
                      {transacao.valor.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}