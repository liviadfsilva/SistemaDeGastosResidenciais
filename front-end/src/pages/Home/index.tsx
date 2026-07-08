import TabelaPessoa from "../../components/TabelaPessoa";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-mist-50 p-8">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-[#9FC76B] text-center">
          Controle de Gastos Residenciais
        </h1>

        <TabelaPessoa />
      </div>
    </main>
  );
}