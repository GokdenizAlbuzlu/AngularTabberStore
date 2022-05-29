<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$nom = trim($request->nom);
$prenom= trim($request->prenom);
$pwd = trim($request->pwd);
$email = trim($request->email);
$ville=trim($request->ville);
$cp=trim($request->cp);

$sql = "INSERT INTO utilisateur(prenom,nom,email,pwd,ville,cp) VALUES ('$prenom','$nom','$email','$pwd','$ville','$cp')";

if ($mysqli->query($sql)){

    $data=array('message'=>'success');
    echo json_encode($data); 
}else{
    $data=array('message'=>'failed');
    echo json_encode($data); 
    }
}

?>