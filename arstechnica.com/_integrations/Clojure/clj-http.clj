(require '[clj-http.client :as client])

(client/get "https://api_dev.apitube.io/v1/sets/6250999" {:headers {:X-ApiTube-Key "YOUR-KEY-HERE"}
                                                             :query-params {:limit "250" :offset "0"}})



