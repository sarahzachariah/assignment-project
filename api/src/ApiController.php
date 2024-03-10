<?php

namespace src;

// require 'System/bootstrap.php';

class ApiController {

    private $requestURI;
    private $userId;


    public function __construct($requestURI, $userId){
        global $dbConnection;
        $this->requestURI = $requestURI;
        $this->userId = $userId;
        // echo $userId;
    }

    public function processRequest(){
        switch($this->requestURI){
            case 'create':
                $response = $this->createUser();
                break;
            case 'user':
                $response = $this->getUser($this->userId);
                break;
            case 'edit':
                $response = $this->editUser($this->userId);
                break;
            case 'delete':
                $response = $this->deleteUser($this->userId);
                break;
            default:
                $response = false;
                break;
        }
    
        return $response;
    }

    private function checkConnection($query){
        global $dbConnection;

        return $dbConnection->query($query);
    }

    private function returnFormat($json){
        global $dbConnection;
        header('Content-Type: application/json; charset=utf-8');
        $dbConnection->close();
        return $json;
    }

    // TODO - Fix the default values, add a condition to restrict multiple entries for same details.
    public function createUser($name = 'Phillip', $mobile_number = 987654, $email = 'somethign@test.com', $password = 'secure', $country = 'IN'){
        try {
            $query = "insert into users (name, mobile_number, email, password, country) values(
                '" . $name . "', " . $mobile_number . ", '" . $email . "', '" . $password . "', '" . $country . "')";

            $createTable = $this->checkConnection($query);

            if ($createTable === TRUE) {
                $json = "New record created successfully";
            } else {
                $json = "Error: " . $sql . "<br>" . $createTable->error;
            }
    
            return $this->returnFormat($json);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function getUser($userId=false){
        global $dbConnection;
        try {
            $query = 'select * from users where deleted_at is null';
            if($userId){
                $query .= ' and id = ' . $userId;
            }

            $createTable = $this->checkConnection($query);
            $jsonData = array();
            $json = null;
            if($createTable->num_rows > 0){
                while ($array = $createTable->fetch_assoc()) {
                    $jsonData[] = $array;
                }
                $json = stripslashes(json_encode($jsonData));
            }
    
            return $this->returnFormat($json);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function editUser($userId){
        // TODO - update query
        $query = "update users set updated_at = '". date("Y-m-d H:i:s") ."' where id=". $userId;
        $createTable = $this->checkConnection($query);
        if ($createTable === TRUE) {
            $json = "User updated successfully";
        } else {
            $json = "Error: " . $sql . "<br>" . $createTable->error;
        }

        return $this->returnFormat($json);
    }

    public function deleteUser($userId){
        $query = "update users set deleted_at = '". date("Y-m-d H:i:s") ."' where id=". $userId;
        $createTable = $this->checkConnection($query);
        if ($createTable === TRUE) {
            $json = "User deleted successfully";
        } else {
            $json = "Error: " . $sql . "<br>" . $createTable->error;
        }

        return $this->returnFormat($json);
    }
}

?>