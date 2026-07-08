import type { Transacao } from "../../types/Transacao";

interface TabelaTransacaoProps {
  transacoes: Transacao[];
}

export default function TabelaTransacao({
  transacoes,
}: TabelaTransacaoProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#DD716B]">
          Transações
        </h2>

        <button className="rounded bg-[#daf0be] px-4 py-2 font-bold text-[#DD716B] hover:text-[#9FC76B]">
          Nova Transação
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-300">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-3 text-left">Descrição</th>
              <th className="border p-3 text-center">Tipo</th>
              <th className="border p-3 text-center">Valor</th>
            </tr>
          </thead>

          <tbody>
            {transacoes.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="p-6 text-center text-gray-500"
                >
                  Nenhuma transação cadastrada.
                </td>
              </tr>
            ) : (
              transacoes.map((transacao) => (
                <tr key={transacao.id}>
                  <td className="border p-3">
                    {transacao.descricao}
                  </td>

                  <td className="border p-3 text-center">
                    {transacao.tipo}
                  </td>

                  <td className="border p-3 text-center">
                    {transacao.valor.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
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