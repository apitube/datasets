import requests

url = "https://api_dev.apitube.io/v1/sets/97979801"

querystring = {"limit":"250", "offset": "0"}

headers = {
	"X-ApiTube-Key": "YOUR-KEY-HERE"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)