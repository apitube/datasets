const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/sets/67017857',
    params: {
        limit: '250',
        offset: '0'
    },
    headers: {
        'X-ApiTube-Key': 'YOUR-KEY-HERE'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
