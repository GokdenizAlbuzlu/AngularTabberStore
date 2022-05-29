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

$email = trim($request->email);
$sql = "SELECT * FROM utilisateur WHERE (utilisateur.email='$email')";
$ret=$mysqli->query($sql);
$ret2=$mysqli->query($sql);
$return=$ret->fetch_assoc();

$sql2 = "SELECT * FROM vendeur WHERE (vendeur.email='$email')";
$ret3=$mysqli->query($sql2);
$ret4=$mysqli->query($sql2);
$return2=$ret3->fetch_assoc();

if(is_null($ret4->fetch_array())){
    $data=array('id'=>$return['ID'],'nom'=>$return['nom'],'prenom'=>$return['prenom'],'email'=>$return['email'],'Ville'=>$return['ville'],'CodePostal'=>$return['cp']);
    echo json_encode($data);
}
if(is_null($ret2->fetch_array())){
    $data=array('id'=>$return2['ID'],'entreprise'=>$return2['Entreprise'],'adresse'=>$return2['AdresseCommercial'],'numerotva'=>$return2['NumeroTVA'],'numregistre'=>$return2['Numregistrecommerce'],'telephone'=>$return2['PhoneNumber'],'email'=>$return2['email'],'Ville'=>$return2['Ville'],'CodePostal'=>$return2['CodePostal']);
    echo json_encode($data);

}

}


?>