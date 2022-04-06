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
$usr = json_decode(file_get_contents("php://input"),true);
$nom = $usr["email"];
$pas= $usr["password"];
$update = "INSERT INTO usuarios (usuario,contraseña) VALUES ('$nom','$pas')";
if(mysqli_query($db,$update)){
    echo json_encode("Se ha creado el usuario: ".$nom);
}else{
    echo json_encode("Error",mysqli_error($db));
}
}



?>