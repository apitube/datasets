const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apitube.io/v1/sets/39119033?limit=250&offset=0",
    "method": "GET",
    "headers": {
        "X-ApiTube-Key": "YOUR-KEY-HERE"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
