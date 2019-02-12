<?php
/**
 * Created by PhpStorm.
 * User: meto
 * Date: 2/11/19
 * Time: 12:01 AM
 */

include_once 'connection.php';


if (isset($_POST["face"])) {
    if (!empty($_POST["face"])) {

        $database = new DATABASE();
        $pdo = $database->getConn();

        // Insert value
        $sql = 'UPDATE `face` SET  `face_name`= ? WHERE id=1;';
        $req = $pdo->prepare($sql);
        $response = $req->execute(array($_POST["face"]));

        // Return the face name if succeed
        if ($response && ($req->rowCount() > 0)) {
            echo $_POST["face"];
        } else {
            die('fail 3');
        }

        $req->closeCursor(); // this is not even required
        $req = null; // doing this is mandatory for connection to get closed
        $pdo = null;
        //Close connection
        $database->closeConn();

    } else {
        die('fail 1');
    }
} else {
    die('fail 2');
}