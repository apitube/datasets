(require '[clj-http.client :as client])

(client/get "https://apitube.io/v1/sets/39119033" {:headers {:X-ApiTube-Key "YOUR-KEY-HERE"}
                                                             :query-params {:limit "250" :offset "0"}})



