using Api.DTOs.Resumo;
using Api.Data;
using Api.Models;
using Microsoft.EntityFrameworkCore;

public class ResumoTotalService
{
    private readonly AppDbContext _context;

    public ResumoTotalService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<ResumoGeralDto> ObterResumoAsync()
    {
        var pessoas = await _context.Pessoas
            .Include(p => p.Transacoes)
            .ToListAsync();

        var resultado = new ResumoGeralDto();

        foreach (var p in pessoas)
        {
            var receitas = p.Transacoes
                .Where(t => t.Tipo == TipoTransacao.Receita)
                .Sum(t => t.Valor);

            var despesas = p.Transacoes
                .Where(t => t.Tipo == TipoTransacao.Despesa)
                .Sum(t => t.Valor);

            var saldo = receitas - despesas;

            resultado.Pessoas.Add(new PessoaResumoDto
            {
                PessoaId = p.Id,
                Nome = p.Nome,
                TotalReceitas = receitas,
                TotalDespesas = despesas,
                Saldo = saldo
            });

            resultado.TotalReceitas += receitas;
            resultado.TotalDespesas += despesas;
        }

        resultado.Saldo = resultado.TotalReceitas - resultado.TotalDespesas;

        return resultado;
    }
}