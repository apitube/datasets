const fetch = require('node-fetch');

const url = 'https://api_dev.apitube.io/v1/sets/{{sm_id}}?limit=250&offset=0';

const options = {
    method: 'GET',
    headers: {
        'X-ApiTube-Key': 'YOUR-KEY-HERE'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
