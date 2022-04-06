<?php


$infoInstru = json_decode(file_get_contents("php://input"),true);
var_dump($infoInstru);
echo( $infoInstru["preu"]);