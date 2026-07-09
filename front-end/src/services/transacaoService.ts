const API_URL = "http://localhost:8080/api/Transacao";

export async function criarTransacao(
  descricao: string,
  valor: number,
  tipo: string,
  pessoaId: number
) {
  console.log(JSON.stringify({
  descricao,
  valor,
  tipo,
  pessoaId,
}, null, 2));

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      descricao,
      valor,
      tipo,
      pessoaId,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar transação.");
  }

  return response.json();
}