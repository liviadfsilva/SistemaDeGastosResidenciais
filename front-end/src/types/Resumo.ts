export interface PessoaResumo {
  pessoaId: number;
  nome: string;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

export interface ResumoGeral {
  pessoas: PessoaResumo[];
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}