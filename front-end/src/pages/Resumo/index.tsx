import TabelaResumo from "../../components/TabelaResumo";

export default function Resumo() {
  return (
    <main className="flex min-h-screen justify-center bg-mist-50 p-8">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-[#9FC76B]">
          Resumo Financeiro
        </h1>

        <TabelaResumo />
      </div>
    </main>
  );
}