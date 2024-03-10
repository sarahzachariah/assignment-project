<?php
    include 'ApiController.php';
    require_once 'System/bootstrap.php';

    use src\ApiController;

    $uri = parse_url($_SERVER['REQUEST_URI']);

    if(isset($uri['query'])){
        parse_str($uri['query'], $params);
    }
    
    $userId = $params['id'] ?? '';

    $uri = explode( '/', $uri['path'] );

    $route = '/';
    if (isset($uri[count($uri) - 1])) {
        $route = $uri[count($uri) - 1];
    }
    
    // echo 'path: ' . $route . ' ID: ' . $userId;

    try{
        $responses = new ApiController($route, $userId);
        $resp = $responses->processRequest();
    } catch(Exception $e) {
        echo $e;
    }
    

    echo $resp;
?>