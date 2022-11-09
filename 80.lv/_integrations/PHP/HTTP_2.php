<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://apitube.io/v1/sets/55587074');
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
