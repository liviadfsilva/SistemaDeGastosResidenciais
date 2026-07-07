using Api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api.Models;
using Api.DTOs.Transacao;
namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransacaoController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly TransacaoService _transacaoService;

    public TransacaoController(AppDbContext context, TransacaoService transacaoService)
    {
        _context = context;
        _transacaoService = transacaoService;
    }

    // Listagem de transações.
    [HttpGet]
    public async Task<ActionResult<List<TransacaoDto>>> GetAll()
    {
        var transacoes = await _context.Transacoes.ToListAsync();

        var response = transacoes.Select(t => new TransacaoDto
        {
            Id = t.Id,
            Descricao = t.Descricao,
            Valor = t.Valor,
            Tipo = t.Tipo,
        }).ToList();

        return Ok(response);
    }

    // listagem de transação baseado no ID da pessoa.
    [HttpGet("{id}")]
    public async Task<ActionResult<TransacaoDto>> GetById(int id)
    {
        var t = await _context.Transacoes
            .FirstOrDefaultAsync(x => x.Id == id);

        if (t == null)
            return NotFound();

        var response = new TransacaoDto
        {
            Id = t.Id,
            Descricao = t.Descricao,
            Valor = t.Valor,
            Tipo = t.Tipo,
        };

        return Ok(response);
    }

    // Criação de transação.
    [HttpPost]
    public async Task<ActionResult<TransacaoDto>> Create(CriarTransacaoDto dto)
    {
        try
        {
            var transacao = new Transacao
            {
                Descricao = dto.Descricao,
                Valor = dto.Valor,
                Tipo = dto.Tipo,
                PessoaId = dto.PessoaId
            };

            var resultado = await _transacaoService.CriarAsync(transacao);

            var response = new TransacaoDto
            {
                Id = resultado.Id,
                Descricao = resultado.Descricao,
                Valor = resultado.Valor,
                Tipo = resultado.Tipo,
            };

            return CreatedAtAction(nameof(GetById), new { id = response.Id }, response);
        }
        catch (KeyNotFoundException ex)
        {
            return NotFound(new { erro = ex.Message });
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { erro = ex.Message });
        }
        catch
        {
            return StatusCode(500, new { erro = "Erro inesperado" });
        }
    }
}