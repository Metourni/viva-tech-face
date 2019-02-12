<?php
/**
 * Created by PhpStorm.
 * User: meto
 * Date: 2/11/19
 * Time: 1:06 AM
 */


class DATABASE
{
    private
        $servername = "localhost",
        $port = "8889",
        $username = "root",
        $password = "root",
        $dbname = "face_viva_tech",

        $pdo = null;

    public function __construct()
    {
        if ($this->pdo == null) {
            $this->getConn();
        }
    }

    function getConn()
    {
        //Access to database
        try {
            $this->pdo = new PDO("mysql:host=$this->servername:$this->port;dbname=$this->dbname;charset=utf8", $this->username, $this->password);
            //$this->pdo = new PDO('mysql:host=localhost:8889;dbname=face_viva_tech;charset=utf8', 'root', 'root');

            // set the PDO error mode to exception
            //$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);


            return $this->pdo;
        } catch (PDOException $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }

    function closeConn()
    {
        $this->pdo = null;
    }

}
