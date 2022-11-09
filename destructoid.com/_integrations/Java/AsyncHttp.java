AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://apitube.io/v1/sets/39119033?limit=250&offset=0")
	.setHeader("X-ApiTube-Key", "YOUR-KEY-HERE")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();
