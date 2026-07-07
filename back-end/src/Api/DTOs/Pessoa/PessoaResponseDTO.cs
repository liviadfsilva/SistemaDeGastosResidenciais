using Api.DTOs.Transacao;
namespace Api.DTOs.Pessoa;

public class PessoaResponseDto
{
    public int Id { get; set; }
    public string Nome { get; set; } = null!;
    public int Idade { get; set; }

    public List<TransacaoDto> Transacoes { get; set; } = new();
}