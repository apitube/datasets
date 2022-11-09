const http = require("https");

const options = {
    "method": "GET",
    "hostname": "apitube.io",
    "port": null,
    "path": "/v1/sets/39119033?limit=250&offset=0",
    "headers": {
        "X-ApiTube-Key": "YOUR-KEY-HERE"
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();
