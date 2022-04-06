<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$host = "localhost";
$name = "gosh_tusters";
$user = "root";
$password="";
$port = 3306;
$db = new mysqli($host,$user,$password,$name);

if(!$db){
    echo json_encode("ERROR");
}else{
    $entidad = json_decode(file_get_contents("php://input"),true);
$nom = $entidad["nombre"];

$delete = "DELETE FROM entidades WHERE nombre='$nom'";
if(mysqli_query($db,$delete)){
    echo json_encode("Se ha borrado la entidad ".$nom);
}else{
    echo json_encode("Error",mysqli_error($db));
}

}




?>