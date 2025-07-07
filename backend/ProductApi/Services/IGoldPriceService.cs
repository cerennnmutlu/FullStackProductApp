namespace ProductApi.Services;

public interface IGoldPriceService
{
    Task<double> GetGoldPricePerGramAsync();
}
