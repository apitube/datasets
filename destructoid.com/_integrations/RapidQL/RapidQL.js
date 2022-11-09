// For more information about RapidQL, checkout docs.rapidql.com!

const RapidQL = require('domains/api/storage/app/API/v1/Export/Stubs/integrations/RapidQL/RapidQL');
let rql = new RapidQL({
});

rql.query(`{
  Http.get(
    url:"https://apitube.io/v1/sets/39119033?limit=250&offset=0"
    headers : {
"X-ApiTube-Key":"YOUR-KEY-HERE"
    }
    body : undefined
  ) {

  }
}`)
.then((res) => console.log(res))
.catch((err) => console.log(err));
