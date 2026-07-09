import { useEffect, useState } from "react";
import { buscarResumo } from "../../services/resumoService";
import type { ResumoGeral } from "../../types/Resumo";
import { useNavigate } from "react-router-dom";

export default function TabelaResumo() {
  const [resumo, setResumo] = useState<ResumoGeral | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarResumo() {
      try {
        const dados = await buscarResumo();
        setResumo(dados);
      } catch (error) {
        console.error("Erro ao carregar resumo:", error);
      }
    }

    carregarResumo();
  }, []);

  if (!resumo) {
    return <p>Carregando resumo...</p>;
  }

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#DD716B]">
          Resumo Financeiro
        </h2>

        <button
        onClick={() => navigate("/")}
        className="rounded bg-[#daf0be] px-4 py-2 font-bold text-[#DD716B] hover:text-[#9FC76B] hover:cursor-pointer">
          Voltar para o Início
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-300">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-3 text-left">Pessoa</th>
              <th className="border p-3 text-center">Receitas</th>
              <th className="border p-3 text-center">Despesas</th>
              <th className="border p-3 text-center">Saldo</th>
            </tr>
          </thead>

          <tbody>
            {resumo.pessoas.map((pessoa) => (
              <tr key={pessoa.pessoaId}>
                <td className="border p-3">
                  {pessoa.nome}
                </td>

                <td className="border p-3 text-center">
                  R$ {pessoa.totalReceitas.toFixed(2)}
                </td>

                <td className="border p-3 text-center">
                  R$ {pessoa.totalDespesas.toFixed(2)}
                </td>

                <td className="border p-3 text-center">
                  R$ {pessoa.saldo.toFixed(2)}
                </td>
              </tr>
            ))}

            <tr className="font-bold">
              <td className="border p-3">
                Total Geral
              </td>

              <td className="border p-3 text-center">
                R$ {resumo.totalReceitas.toFixed(2)}
              </td>

              <td className="border p-3 text-center">
                R$ {resumo.totalDespesas.toFixed(2)}
              </td>

              <td className="border p-3 text-center">
                R$ {resumo.saldo.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}