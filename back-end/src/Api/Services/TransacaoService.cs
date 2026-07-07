using Api.Data;
using Api.Models;
using Microsoft.EntityFrameworkCore;

public class TransacaoService
{
    private readonly AppDbContext _context;

    public TransacaoService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Transacao> CriarAsync(Transacao transacao)
    {
        var pessoa = await _context.Pessoas.FindAsync(transacao.PessoaId);

        if (pessoa == null)
            throw new KeyNotFoundException("Pessoa não encontrada.");

        if (pessoa.Idade < 18 && transacao.Tipo == TipoTransacao.Receita)
            throw new InvalidOperationException("Menores de idade só podem cadastrar despesas.");

        _context.Transacoes.Add(transacao);
        await _context.SaveChangesAsync();

        return transacao;
    }
}