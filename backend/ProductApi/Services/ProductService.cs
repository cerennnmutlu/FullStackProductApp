using ProductApi.Models;
using System.Text.Json;

namespace ProductApi.Services;

public class ProductService : IProductService
{
    private readonly IGoldPriceService _goldPriceService;

    public ProductService(IGoldPriceService goldPriceService)
    {
        _goldPriceService = goldPriceService;
    }

    public async Task<List<ProductResponse>> GetAllProductsAsync()
    {
        var json = await File.ReadAllTextAsync("products.json");
        var rawProducts = JsonSerializer.Deserialize<List<Product>>(json)!;

        double goldPricePerGram = await _goldPriceService.GetGoldPricePerGramAsync();
       
        //Logging the gold price for debugging purposes
        //Console.WriteLine("Gold price per gram: " + goldPricePerGram);


        return rawProducts.Select(p => new ProductResponse
        {
            Name = p.Name,
            PopularityScoreOutOf5 = Math.Round(p.PopularityScore * 5, 1),
            Price = Math.Round((p.PopularityScore + 1) * p.Weight * goldPricePerGram, 2),
            Images = p.Images
        }).ToList();
    }
}
