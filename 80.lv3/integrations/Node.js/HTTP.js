const http = require("https");

const options = {
    "method": "GET",
    "hostname": "api_dev.apitube.io",
    "port": null,
    "path": "/v1/sets/46796339?limit=250&offset=0",
    "headers": {
        "X-ApiTube-Key": "***KEY***"
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
