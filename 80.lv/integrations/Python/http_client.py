import http.client

conn = http.client.HTTPSConnection("api_dev.apitube.io")

headers = {
    'X-ApiTube-Key': "***KEY***"
}

conn.request("GET", "/v1/sets/46796339?limit=250&offset=0", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))