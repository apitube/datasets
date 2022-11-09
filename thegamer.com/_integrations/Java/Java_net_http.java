HttpRequest request = HttpRequest.newBuilder()
		.uri(URI.create("https://apitube.io/v1/sets/67017857?limit=250&offset=0"))
		.header("X-ApiTube-Key", "YOUR-KEY-HERE")
		.method("GET", HttpRequest.BodyPublishers.noBody())
		.build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
