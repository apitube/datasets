<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://api_dev.apitube.io/v1/sets/97535458');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString([
    'limit' => '250',
    'offset' => '250'
]));

$request->setHeaders([
    'X-ApiTube-Key' => 'YOUR-KEY-HERE'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
