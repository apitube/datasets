const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://api_dev.apitube.io/v1/sets/46796339',
    params: {
        limit: '250',
        offset: '0'
    },
    headers: {
        'X-ApiTube-Key': '***KEY***'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
