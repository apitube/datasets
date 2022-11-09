const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://apitube.io/v1/sets/55587074?limit=250&offset=0");
xhr.setRequestHeader("X-ApiTube-Key", "YOUR-KEY-HERE");

xhr.send(data);
