package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://apitube.io/v1/sets/39119033?limit=250&offset=0"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-ApiTube-Key", "YOUR-KEY-HERE")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
