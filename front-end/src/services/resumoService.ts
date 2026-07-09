import type { ResumoGeral } from "../types/Resumo";

const API_URL = "http://localhost:8080/api/ResumoTotal/resumo";

export async function buscarResumo(): Promise<ResumoGeral> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar resumo.");
  }

  return response.json();
}