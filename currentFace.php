<?php
/**
 * Created by PhpStorm.
 * User: meto
 * Date: 2/11/19
 * Time: 12:01 AM
 */

try {
    $bdd = new PDO('mysql:host=localhost:8889;dbname=face_viva_tech;charset=utf8', 'root', 'root');

} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

$reponse = $bdd->query('SELECT face_name FROM face');

$face_name = ($reponse->fetch())[0];

echo $face_name;


$reponse->closeCursor();