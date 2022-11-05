import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://api_dev.apitube.io/v1/sets/97979801',
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
