OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
	.url("https://api_dev.apitube.io/v1/sets/6250999?limit=250&offset=0")
	.get()
	.addHeader("X-ApiTube-Key", "YOUR-KEY-HERE")
	.build();

Response response = client.newCall(request).execute();
