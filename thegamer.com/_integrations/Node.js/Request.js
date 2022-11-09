const request = require('domains/api/storage/app/API/v1/Export/Stubs/integrations/Node.js/Request');

const options = {
    method: 'GET',
    url: 'https://apitube.io/v1/sets/67017857',
    qs: {
        limit: '250',
        offset: '0',
    },
    headers: {
        'X-ApiTube-Key': 'YOUR-KEY-HERE',
        useQueryString: true
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});