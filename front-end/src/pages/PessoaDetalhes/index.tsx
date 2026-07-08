import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Pessoa } from "../../types/Pessoa";
import { buscarPessoa } from "../../services/pessoaService";
import TabelaTransacao from "../../components/TabelaTransacao";

export default function PessoaDetalhes() {
  const { id } = useParams();
  const [pessoa, setPessoa] = useState<Pessoa | null>(null);

  useEffect(() => {
    async function carregarPessoa() {
      try {
        const dados = await buscarPessoa(Number(id));
        setPessoa(dados);
      } catch (error) {
        console.error(error);
      }
    }

    carregarPessoa();
  }, [id]);

  if (!pessoa) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="flex min-h-screen justify-center bg-mist-50 p-8">
      <div className="w-full max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold text-[#9FC76B] text-center">
          Transações
        </h1>

        <TabelaTransacao
        transacoes={pessoa.transacoes}
        nomePessoa={pessoa.nome}
         />
      </div>
    </main>
  );
}