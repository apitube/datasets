var client = new RestClient("https://apitube.io/v1/sets/67017857?limit=250&offset=0");
var request = new RestRequest(Method.GET);
request.AddHeader("X-ApiTube-Key", "YOUR-KEY-HERE");
IRestResponse response = client.Execute(request);
