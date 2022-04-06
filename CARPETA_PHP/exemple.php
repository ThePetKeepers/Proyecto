<?php
$nom =$_GET["nom"];
$resposta=['text' => $nom];

echo json_encode($resposta);    

?>