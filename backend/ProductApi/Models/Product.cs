using System.Text.Json.Serialization;

public class Product
{
    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonPropertyName("popularityScore")]
    public double PopularityScore { get; set; }

    [JsonPropertyName("weight")]
    public double Weight { get; set; }

    [JsonPropertyName("images")]
    public Dictionary<string, string> Images { get; set; }
}
