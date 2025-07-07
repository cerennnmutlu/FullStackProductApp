namespace ProductApi.Models;

public class ProductResponse
{
    public string Name { get; set; }
    public double Price { get; set; }
    public double PopularityScoreOutOf5 { get; set; }
    public Dictionary<string, string> Images { get; set; } = new();
}
