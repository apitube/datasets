import axios from "domains/api/storage/app/API/v1/Export/Stubs/Javascript/Axios";

const options = {
    method: 'GET',
    url: 'https://api_dev.apitube.io/v1/sets/97535458',
    params: {
        limit: '250',
        offset: '0'
    },
    headers: {
        'X-ApiTube-Key': 'YOUR-KEY-HERE'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
