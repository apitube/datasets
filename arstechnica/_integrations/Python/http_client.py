import http.client

conn = http.client.HTTPSConnection("api_dev.apitube.io")

headers = {
    'X-ApiTube-Key': "YOUR-KEY-HERE"
}

conn.request("GET", "/v1/sets/97535458?limit=250&offset=0", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
