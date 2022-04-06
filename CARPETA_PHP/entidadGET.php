<?php
$host = "localhost";
$name = "gosh_tusters";
$user = "root";
$password="";
$port = 3306;
$db = new mysqli($host,$user,$password,$name);
$value=array();
if(!$db){
    echo json_encode("error");
}else{
    
    $entidad = json_decode(file_get_contents("php://input"),true);
    $id = $entidad["id"];
    $query = $db->query("select * from entidades WHERE id='$id';");
    while($fila = mysqli_fetch_array($query)){
        $value=$fila;
    }
    echo json_encode($value);
}
?>