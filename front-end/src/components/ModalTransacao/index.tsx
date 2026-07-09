import { useState, useEffect } from "react";
import { criarTransacao } from "../../services/transacaoService";
import { NumericFormat } from "react-number-format";

interface ModalTransacaoProps {
  pessoaId: number;
  idade: number;
  onClose: () => void;
  onTransacaoCriada: () => void;
}

export default function ModalTransacao({pessoaId, idade, onClose, onTransacaoCriada,}: 
  ModalTransacaoProps) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(idade >= 18 ? "Receita" : "Despesa");

  useEffect(() => {
    if (idade < 18) {
      setTipo("Despesa");
    }
  }, [idade]);

  async function salvarTransacao() {
    try {
      await criarTransacao(
        descricao,
        Number(valor),
        tipo,
        pessoaId
      );

      onTransacaoCriada();
      onClose();
    } catch (error) {
      console.error("Erro ao criar transação:", error);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold text-[#DD716B]">
          Nova Transação
        </h2>

        {idade < 18 && (
        <div className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
          Pessoas menores de 18 anos podem cadastrar apenas despesas.
        </div>
      )}

        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Descrição
          </label>

          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição"
            className="w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-[#9FC76B]"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-700">
            Valor
          </label>

          <NumericFormat
            value={valor}
            onValueChange={(values) => setValor(values.value)}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale
            prefix="R$ "
            allowNegative={false}
            className="w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-[#9FC76B]"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium text-gray-700">
            Tipo
          </label>

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-[#9FC76B]"
          >
            {idade >= 18 && (
              <option value="Receita">
                Receita
              </option>
            )}

            <option value="Despesa">
              Despesa
            </option>
          </select>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            Cancelar
          </button>

          <button
            onClick={salvarTransacao}
            className="cursor-pointer rounded-lg bg-[#9FC76B] px-4 py-2 font-semibold text-white hover:bg-[#8bb45b]"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}