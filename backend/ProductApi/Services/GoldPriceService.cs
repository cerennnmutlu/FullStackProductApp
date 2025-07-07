using System.Net.Http;
using System.Text.Json;

namespace ProductApi.Services;

public class GoldPriceService : IGoldPriceService
{
    private readonly HttpClient _httpClient;
    private const string ApiKey = "sk_B23aF81fe015090474b94F2e1762a95FeE5eB36565CEfcD9"; // api.key for goldapi.io

    public GoldPriceService()
    {
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("x-access-token", ApiKey);
       
    }

    public async Task<double> GetGoldPricePerGramAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync("https://www.goldapi.io/api/XAU/USD");
            response.EnsureSuccessStatusCode();

            var json = await response.Content.ReadAsStringAsync();
            var doc = JsonDocument.Parse(json);
            var ouncePrice = doc.RootElement.GetProperty("price").GetDouble();

            // 1 ounce ≈ 31.1035 gram
            var gramPrice = ouncePrice / 31.1035;
            return Math.Round(gramPrice, 2);
        }
        catch
        {
            return 70.0; // fallback constant value
        }
    }
}
