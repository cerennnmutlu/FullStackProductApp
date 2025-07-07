using Microsoft.AspNetCore.Mvc;
using ProductApi.Services;
using ProductApi.Models;

namespace ProductApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductsController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<ActionResult<List<ProductResponse>>> GetAllProducts()
    {
        var products = await _productService.GetAllProductsAsync();
        return Ok(products);
    }
    [HttpGet("by-price")]
    public async Task<ActionResult<List<ProductResponse>>> GetByPriceRange(
    [FromQuery] double min,
    [FromQuery] double max)
    {
        var products = await _productService.GetAllProductsAsync();
        var filtered = products.Where(p => p.Price >= min && p.Price <= max).ToList();
        return Ok(filtered);
    }

    [HttpGet("by-score")]
    public async Task<ActionResult<List<ProductResponse>>> GetByPopularityScore(
        [FromQuery] double min,
        [FromQuery] double max)
    {
        var products = await _productService.GetAllProductsAsync();
        var filtered = products.Where(p => p.PopularityScoreOutOf5 >= min && p.PopularityScoreOutOf5 <= max).ToList();
        return Ok(filtered);
    }

    [HttpGet("filter")]
    public async Task<ActionResult<List<ProductResponse>>> FilterCombined(
        [FromQuery] double? minPrice,
        [FromQuery] double? maxPrice,
        [FromQuery] double? minScore,
        [FromQuery] double? maxScore)
    {
        var products = await _productService.GetAllProductsAsync();

        var filtered = products.Where(p =>
            (!minPrice.HasValue || p.Price >= minPrice) &&
            (!maxPrice.HasValue || p.Price <= maxPrice) &&
            (!minScore.HasValue || p.PopularityScoreOutOf5 >= minScore) &&
            (!maxScore.HasValue || p.PopularityScoreOutOf5 <= maxScore)
        ).ToList();

        return Ok(filtered);
    }



}
