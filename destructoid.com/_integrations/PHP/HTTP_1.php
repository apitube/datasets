<?php

$request = new HttpRequest();
$request->setUrl('https://apitube.io/v1/sets/39119033');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData([
    'limit' => '250',
    'offset' => '0'
]);

$request->setHeaders([
    'X-ApiTube-Key' => 'YOUR-KEY-HERE'
]);

try {
    $response = $request->send();

    echo $response->getBody();
} catch (HttpException $ex) {
    echo $ex;
}
