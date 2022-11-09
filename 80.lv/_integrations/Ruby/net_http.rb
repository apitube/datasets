require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://apitube.io/v1/sets/55587074?limit=250&offset=0")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-ApiTube-Key"] = 'YOUR-KEY-HERE'

response = http.request(request)
puts response.read_body
