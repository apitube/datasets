const request = require('request');

const options = {
    method: 'GET',
    url: 'https://api_dev.apitube.io/v1/sets/46796339',
    qs: {
        limit: '250',
        offset: '0',
    },
    headers: {
        'X-ApiTube-Key': '***KEY***',
        useQueryString: true
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
