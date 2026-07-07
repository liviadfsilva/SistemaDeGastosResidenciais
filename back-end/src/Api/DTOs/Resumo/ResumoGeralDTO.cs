using Api.DTOs.Resumo;
namespace Api.DTOs.Resumo;

public class ResumoGeralDto
{
    public List<PessoaResumoDto> Pessoas { get; set; } = new();
    public decimal TotalReceitas { get; set; }
    public decimal TotalDespesas { get; set; }
    public decimal Saldo { get; set; }
}