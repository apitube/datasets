(require '[clj-http.client :as client])

(client/get "https://api_dev.apitube.io/v1/sets/{{sm_id}}" {:headers {:X-ApiTube-Key "YOUR-KEY-HERE"}
                                                             :query-params {:limit "250" :offset "0"}})



