library(httr)

url <- "https://api_dev.apitube.io/v1/sets/97535458"

queryString <- list(
  limit = "250",
  offset = "0"
)

response <- VERB("GET", url, add_headers('X-ApiTube-Key' = 'YOUR-KEY-HERE'), query = queryString, content_type("application/octet-stream"))

content(response, "text")
