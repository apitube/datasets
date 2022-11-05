var client = new HttpClient();
var request = new HttpRequestMessage
{
	Method = HttpMethod.Get,
	RequestUri = new Uri("https://api_dev.apitube.io/v1/sets/97979801?limit=250&offset=0"),
	Headers =
	{
		{ "X-ApiTube-Key", "YOUR-KEY-HERE" },
	},
};
using (var response = await client.SendAsync(request))
{
	response.EnsureSuccessStatusCode();
	var body = await response.Content.ReadAsStringAsync();
	Console.WriteLine(body);
}
