using System.ComponentModel.DataAnnotations.Schema;
namespace Api.Models;

[Table("pessoas")]
public class Pessoa
{
    public int Id { get; set; }
    public string Nome { get; set; } = null!;
    public int Idade { get; set; }
    public ICollection<Transacao> Transacoes { get; set; } = new List<Transacao>();
}