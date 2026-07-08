import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import ModalPessoa from "../ModalPessoa";
import { listarPessoas, excluirPessoa } from "../../services/pessoaService";
import type { Pessoa } from "../../types/Pessoa";

export default function TabelaPessoa() {
    const [modalAberto, setModalAberto] = useState(false);
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    async function carregarPessoas() {
      try {
        const dados = await listarPessoas();
        setPessoas(dados);
      } catch (error) {
        console.error("Erro ao carregar pessoas:", error);
      }
    }

    useEffect(() => {
      carregarPessoas();
    }, []);

    async function excluir(id: number) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta pessoa?"
    );

    if (!confirmar) {
      return;
    }

    try {
      await excluirPessoa(id);
      await carregarPessoas();
    } catch (error) {
      console.error("Erro ao excluir pessoa:", error);
    }
  }

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl text-[#DD716B] font-semibold">Pessoas</h2>

        <button onClick={() => setModalAberto(true)} className="rounded font-bold bg-[#daf0be] cursor-pointer px-4 py-2 text-[#DD716B] hover:text-[#9FC76B]">
          Adicionar Pessoa
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-300">
        <table className="w-full border-collapse">
            <tbody>
                {pessoas.length === 0 ? (
                    <tr>
                    <td className="p-6 text-center text-gray-500">
                        Nenhuma pessoa cadastrada.
                    </td>
                    </tr>
                ) : (
                    pessoas.map((pessoa) => (
                    <tr key={pessoa.id} className="border-b last:border-b-0">
                        <td className="flex items-center justify-between p-4">
                        <span>
                            <strong>{pessoa.nome}</strong>, {pessoa.idade} anos
                        </span>

                        <div className="flex gap-12">
                            <button className="text-[#DD716B] cursor-pointer hover:underline">+ Transação</button>
                            <button className="text-[#9FC76B] cursor-pointer hover:underline">Detalhes</button>
                            <button
                            onClick={() => excluir(pessoa.id)}
                            className="text-red-500 hover:text-red-700 cursor-pointer">
                                <Trash2 size={18} />
                            </button>
                        </div>
                        </td>
                    </tr>
                    ))
                )}
            </tbody>
        </table>
      </div>
      {modalAberto && (
        <ModalPessoa onClose={() => setModalAberto(false)}
        onPessoaCriada={carregarPessoas} />
      )}
    </section>
  );
}