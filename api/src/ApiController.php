<?php

namespace src;

// require 'System/bootstrap.php';

class ApiController {

    private $requestURI;
    private $userId;


    public function __construct($requestURI, $userId, $requestData){
        global $dbConnection;
        $this->requestURI = $requestURI;
        $this->userId = $userId;
        $this->requestData = $requestData;
        // echo $userId;
    }

    public function processRequest(){
        switch($this->requestURI){
            case 'create':
                $response = $this->createUser($this->requestData);
                break;
            case 'user':
                $response = $this->getUser($this->userId);
                break;
            case 'update':
                $response = $this->editUser($this->requestData);
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
    public function createUser($requestData){
        try {
            $json = [];
            $query = "insert into users (name, mobile_number, email, password, country) values(
                '" . $requestData['fullname'] . "', " . $requestData['mobile_number'] . ", '" . $requestData['email'] . "', 
                '" . $requestData['password'] . "', '" . $requestData['country'] . "')";

            $createTable = $this->checkConnection($query);

            if ($createTable === TRUE) {
                // $json = ['status' => "Success", 'message' => "New record created successfully"];
                $json = "New record created successfully";
            } else {
                // $json = ['status' => "Fail", 'error' => "Error: " . $sql . "<br>" . $createTable->error];
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
            $query = 'select id, name, mobile_number, email, country, password from users where deleted_at is null';
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
                $json = $jsonData;
            }

            // echo json_encode($json);
            $jsonData = [];
            $colsData = [];
            $rowsData = [];
            foreach($json as $index =>$row){
                $rowsData[$index] = [];
                foreach($row as $key => $val){
                    if($index == 0){
                        $colsData[] = [
                            'field' => $key,
                            'headerName' => $key,
                            'resizable' => false,
                            'checkboxSelection' => $key != 'id' ? false : true,
                            'sortable' => true,
                            'filter' => true,
                        ];
                    }
                    $rowsData[$index][$key] =  $val;
                }
            }

            $jsonData = ['columnDefs' => $colsData, 'rowData' => $rowsData, 'rowSelection' => "multiple", 'suppressCellFocus' => true, 'checkboxSelection' => true];
    
            return $this->returnFormat(json_encode($jsonData));
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function editUser($requestData){
        // TODO - update query
        $query = "update users set updated_at = '". date("Y-m-d H:i:s") ."' where id=". $requestData['id'];
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