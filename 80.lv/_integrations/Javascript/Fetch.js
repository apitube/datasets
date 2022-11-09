const options = {
    method: 'GET',
    headers: {
        'X-ApiTube-Key': 'YOUR-KEY-HERE'
    }
};

fetch('https://apitube.io/v1/sets/55587074?limit=250&offset=0', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
