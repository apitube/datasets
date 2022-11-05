const unirest = require("domains/api/storage/app/API/v1/Export/Stubs/integrations/Node.js/Unirest");

const req = unirest("GET", "https://api_dev.apitube.io/v1/sets/97979801");

req.query({
    "limit": "250",
    "offset": "0",
});

req.headers({
    "X-ApiTube-Key": "YOUR-KEY-HERE",
    "useQueryString": true
});

req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
