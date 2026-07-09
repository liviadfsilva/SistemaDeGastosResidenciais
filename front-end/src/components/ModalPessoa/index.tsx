import { useState } from "react";
import { criarPessoa } from "../../services/pessoaService";

interface ModalPessoaProps {
  onClose: () => void;
  onPessoaCriada: () => void;
}

export default function ModalPessoa({ onClose, onPessoaCriada }: ModalPessoaProps) {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");

    async function salvarPessoa() {
      // console.log("CLIQUEI NO SALVAR");

      try {
        await criarPessoa(nome, Number(idade));

        console.log("Pessoa criada com sucesso!");

        onPessoaCriada();
        onClose();
      } catch (error) {
        console.error("Erro ao criar pessoa:", error);
      }
    }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold text-[#DD716B]">
          Adicionar Pessoa
        </h2>

        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Nome
          </label>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
            className="w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-[#9FC76B]"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium text-gray-700">
            Idade
          </label>

          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade((e.target.value))}
            placeholder="Digite a idade"
            className="w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-[#9FC76B]"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            Cancelar
          </button>

          <button
            onClick={salvarPessoa}
            className="cursor-pointer rounded-lg bg-[#9FC76B] px-4 py-2 font-semibold text-white hover:bg-[#8bb45b]"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}