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
  /*  $entidad = json_decode(file_get_contents("php://input"),true);
$nom = $entidad["nombre"];
$clas= $entidad["clase"];
$des = $entidad["descripcion"];
$tipo = $entidad["tipo"];
$PKE = $entidad["PKE"];*/
$nom = $_POST["nombre"];
$clas= $_POST["clase"];
$des= $_POST["descripcion"];
$tipo= $_POST["tipo"];
$PKE= $_POST["PKE"];
$folderUrl = "imagenes".DIRECTORY_SEPARATOR;
var_dump($_FILES);
foreach ($_FILES as $file) {
    $nomImg=$file["tmp_name"];
    $SoloUrl = $file["name"];
    $UrlImg = $folderUrl.$file["name"]; 
    move_uploaded_file($nomImg,$UrlImg);
}

$SoloUrl= "http://localhost/CARPETA_PHP/imagenes/".$SoloUrl;
$clase = intval($clas);
$crear = "INSERT INTO entidades (nombre,clase,descripcion,tipo,PKE,imagen) VALUES ('$nom','$clase','$des','$tipo','$PKE','$SoloUrl')";
if(mysqli_query($db,$crear)){
    echo json_encode("Se ha insertado la entidad ".$nom);
}else{
    echo json_encode("Error",mysqli_error($db));
}
}




?>