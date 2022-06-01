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
$sql = "SELECT * FROM article WHERE (article.ID_utilisateur='$email')";
$ret=$mysqli->query($sql);



while( $row = $ret->fetch_array())
    {
        $data[]=array('ID'=>$row['ID'],'ID_uti'=>$row['ID_utilisateur'],'Marque'=>$row['Marque'],'Titre'=>$row['Titre'],'Type'=>$row['Type'],'Prix'=>$row['Prix'],'Description'=>$row['Description'],'Taille'=>$row['Taille'],'Genre'=>$row['Genre']);          // 00h35 : si on résout ça c'est finis mdr . 01h12: on a résout c'est finis mdr
        
        
    }
    echo json_encode($data);



}










?>