<?php
define('BASE_PATH', realpath(__DIR__.'/../../'));
require '../vendor/autoload.php';
use Dotenv\Dotenv;

use Src\System\DatabaseConnector;

$dotenv = Dotenv::createImmutable(BASE_PATH);
$dotenv->load();

$dbConnection = (new DatabaseConnector())->getConnection();
