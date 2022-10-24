import requests

url = "https://api_dev.apitube.io/v1/sets/46796339"

querystring = {"limit":"250", "offset": "0"}

headers = {
	"X-ApiTube-Key": "***KEY***"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
