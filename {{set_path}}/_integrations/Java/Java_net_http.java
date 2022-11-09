HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://api_dev.apitube.io/v1/sets/{{sm_id}}?limit=250&offset=0"))
		.header("X-ApiTube-Key", "YOUR-KEY-HERE")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
