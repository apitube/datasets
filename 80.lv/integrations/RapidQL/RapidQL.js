// For more information about RapidQL, checkout docs.rapidql.com!

const RapidQL = require('RapidQL');
let rql = new RapidQL({
});

rql.query(`{
  Http.get(
    url:"https://api_dev.apitube.io/v1/sets/46796339?limit=250&offset=0"
    headers : {
"X-ApiTube-Key":"YOUR-KEY-HERE"
    }
    body : undefined
  ) {

  }
}`)
.then((res) => console.log(res))
.catch((err) => console.log(err));
