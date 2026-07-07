using Api.Data;
using Microsoft.AspNetCore.Mvc;
using Api.DTOs.Resumo;
namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumoTotalController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ResumoTotalService _service;

    public ResumoTotalController(AppDbContext context, ResumoTotalService service)
    {
        _context = context;
        _service = service;
    }

    [HttpGet("resumo")]
    public async Task<ActionResult<ResumoGeralDto>> GetResumo()
    {
        var resultado = await _service.ObterResumoAsync();
        return Ok(resultado);
    }
}