<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$host = "localhost";
$name = "petkeepers";
$user = "root";
$password="";
$port = 3306;
$db = new mysqli($host,$user,$password,$name);

if(!$db){
    echo json_encode("ERROR");
}else{
$nom = $_POST["nom"];
$des = $_POST["des"];
$pre = $_POST["pre"];
$id = $_POST["id"];

/*var_dump($_FILES);
foreach ($_FILES as $file) {
    $nomImg=$file["tmp_name"];
    $SoloUrl = $file["name"];
    $UrlImg = $folderUrl.$file["name"]; 
    move_uploaded_file($nomImg,$UrlImg);
}
$SoloUrl= "http://localhost/Proyecto/CARPETA_PHP/imagenes/".$SoloUrl;*/

$precio = intval($pre);
$identificador = intval($id);
$update = "INSERT INTO servicio (nombre,descripcion,precio,activo,id_suscriptor) VALUES ('$nom','$des','$precio',1,'$identificador')";
if(mysqli_query($db,$update)){
    echo json_encode("Se ha creado el servicio correctamente");
}else{
    echo json_encode("Error",mysqli_error($db));
}
}




?>