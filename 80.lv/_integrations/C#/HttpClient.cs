var client = new HttpClient();
var request = new HttpRequestMessage
{
	Method = HttpMethod.Get,
	RequestUri = new Uri("https://apitube.io/v1/sets/55587074?limit=250&offset=0"),
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
