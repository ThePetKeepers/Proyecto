<?php
$host = "localhost";
$name = "petkeepers";
$user = "root";
$password="";
$port = 3306;
$db = new mysqli($host,$user,$password,$name);
$value=array();
if(!$db){
    echo json_encode("error");
}else{
    $query = $db->query("select * from servicio;");
    while($fila = mysqli_fetch_array($query)){
        $value[]=$fila;
    }
    echo json_encode($value);
}
?>