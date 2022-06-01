<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{

$ID = trim($request->ID);
$sql = "SELECT * FROM article WHERE (article.ID='$ID')";
$ret=$mysqli->query($sql);
$ret2=$mysqli->query($sql);
$return=$ret->fetch_assoc();


    $data=array('ID'=>$return['ID'],'ID_uti'=>$return['ID_utilisateur'],'Marque'=>$return['Marque'],'Titre'=>$return['Titre'],'Type'=>$return['Type'],'Prix'=>$return['Prix'],'Description'=>$return['Description'],'Taille'=>$return['Taille'],'Genre'=>$return['Genre']);
    echo json_encode($data);









}