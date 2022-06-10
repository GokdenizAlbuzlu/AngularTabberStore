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

$ID_utilisateur = trim($request->ID_utilisateur);
$ID_article =trim($request->ID_article);

$sql2="SELECT * FROM panier Where ID_utilisateur='$ID_utilisateur' AND ID_article='$ID_article'";
$result=mysqli_query($mysqli,$sql2);
$nums=mysqli_num_rows($result);

if($nums>0){
    $sql3="UPDATE panier SET Quantite=Quantite+1 WHERE ID_article='$ID_article' AND ID_utilisateur='$ID_utilisateur'";
    if ($mysqli->query($sql3)) {
        $data=array('message'=>'success');
        echo json_encode($data); 
    }else{
        $data=array('message'=>'failed');
        echo json_encode($data); 
        }
}else{
$sql = "INSERT INTO panier(ID_utilisateur,ID_article,Quantite) VALUES ('$ID_utilisateur','$ID_article',1)";

if ($mysqli->query($sql)){

    $data=array('message'=>'success');
    echo json_encode($data); 
}else{
    $data=array('message'=>'failed');
    echo json_encode($data); 
    }
}
}





