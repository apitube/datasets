const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api_dev.apitube.io/v1/sets/97535458?limit=250&offset=0",
    "method": "GET",
    "headers": {
        "X-ApiTube-Key": "YOUR-KEY-HERE"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
