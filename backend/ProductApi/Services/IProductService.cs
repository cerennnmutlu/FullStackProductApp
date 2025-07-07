using ProductApi.Models;

namespace ProductApi.Services;

public interface IProductService
{
    Task<List<ProductResponse>> GetAllProductsAsync();
}
