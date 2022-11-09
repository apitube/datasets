AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://api_dev.apitube.io/v1/sets/{{sm_id}}?limit=250&offset=0")
	.setHeader("X-ApiTube-Key", "YOUR-KEY-HERE")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();
