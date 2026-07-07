using Api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api.Models;
using Api.DTOs.Pessoa;
using Api.DTOs.Transacao;
namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoaController : ControllerBase
{
    private readonly AppDbContext _context;

    public PessoaController(AppDbContext context)
    {
        _context = context;
    }

    // Listagem de todas as pessoas.
    [HttpGet]
    public async Task<ActionResult<List<PessoaResponseDto>>> GetAll()
    {
        var pessoas = await _context.Pessoas
            .Include(p => p.Transacoes)
            .Select(p => new PessoaResponseDto
            {
                Id = p.Id,
                Nome = p.Nome,
                Idade = p.Idade,
                Transacoes = p.Transacoes.Select(t => new TransacaoDto
                {
                    Id = t.Id,
                    Descricao = t.Descricao,
                    Valor = t.Valor,
                    Tipo = t.Tipo
                }).ToList()
            })
            .ToListAsync();

        return Ok(pessoas);
    }

    // Listagem de pessoa por ID.
    [HttpGet("{id}")]
    public async Task<ActionResult<PessoaResponseDto>> GetById(int id)
    {
        var pessoa = await _context.Pessoas
            .Include(p => p.Transacoes)
            .Where(p => p.Id == id)
            .Select(p => new PessoaResponseDto
            {
                Id = p.Id,
                Nome = p.Nome,
                Idade = p.Idade,
                Transacoes = p.Transacoes.Select(t => new TransacaoDto
                {
                    Id = t.Id,
                    Descricao = t.Descricao,
                    Valor = t.Valor,
                    Tipo = t.Tipo
                }).ToList()
            })
            .FirstOrDefaultAsync();

        if (pessoa == null)
            return NotFound();

        return Ok(pessoa);
    }

    // Criação de pessoa.
    [HttpPost]
    public async Task<ActionResult<Pessoa>> Create(CriarPessoaDto dto)
    {
        var pessoa = new Pessoa
        {
            Nome = dto.Nome,
            Idade = dto.Idade
        };

        _context.Pessoas.Add(pessoa);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetById),
            new { id = pessoa.Id },
            pessoa
        );
    }
    
    // Deleção. Quando a pessoa é deletada, as transações relacionadas a ela serão também.
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);

        if (pessoa == null)
            return NotFound();

        _context.Pessoas.Remove(pessoa);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}