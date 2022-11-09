OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
	.url("https://apitube.io/v1/sets/67017857?limit=250&offset=0")
	.get()
	.addHeader("X-ApiTube-Key", "YOUR-KEY-HERE")
	.build();

Response response = client.newCall(request).execute();
