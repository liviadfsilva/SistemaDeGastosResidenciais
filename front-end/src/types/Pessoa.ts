import type { Transacao } from "./Transacao";

export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  transacoes: Transacao[];
}