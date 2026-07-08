const API_URL = "http://localhost:8080/api/Pessoa";

export async function listarPessoas() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar pessoas.");
  }

  return response.json();
}

export async function criarPessoa(nome: string, idade: number) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      idade,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar pessoa.");
  }

  return response.json();
}

export async function excluirPessoa(id: number) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir pessoa.");
  }
}

export async function buscarPessoa(id: number) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar pessoa.");
  }

  return response.json();
}