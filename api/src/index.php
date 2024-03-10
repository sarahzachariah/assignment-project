<?php
    include 'ApiController.php';
    require_once 'System/bootstrap.php';

    use src\ApiController;

    $uri = parse_url($_SERVER['REQUEST_URI']);
    $requestMethod = $_SERVER['REQUEST_METHOD'];

    $requestData = [];
    if($requestMethod == 'POST'){
        $requestData = json_decode(file_get_contents("php://input"), true);
    }

    if(isset($uri['query'])){
        parse_str($uri['query'], $params);
    }
    
    $userId = $params['id'] ?? '';

    $uri = explode( '/', $uri['path'] );

    $route = '/';
    if (isset($uri[count($uri) - 1])) {
        $route = $uri[count($uri) - 1];
    }
    
    // echo 'path: ' . $route . ' ID: ' . $userId . ' Method: ' . $requestMethod;

    try{
        $responses = new ApiController($route, $userId, $requestData);
        $resp = $responses->processRequest();
    } catch(Exception $e) {
        echo $e;
    }

    echo $resp;
?>