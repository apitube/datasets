<?php

$request = new HttpRequest();
$request->setUrl('https://api_dev.apitube.io/v1/sets/46796339');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData([
    'limit' => '250',
    'offset' => '0'
]);

$request->setHeaders([
    'X-ApiTube-Key' => '***KEY***'
]);

try {
    $response = $request->send();

    echo $response->getBody();
} catch (HttpException $ex) {
    echo $ex;
}