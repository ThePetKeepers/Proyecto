<?php
require_once('controlTOKENS.php');
//Comprova si s’ha rebut un header “authorization” amb un token válid
showUsr();
function showUsr(){
    $headers = apache_request_headers();
//var_dump($headers);
$resposta =array();
if(isset($headers["authorization"]) && $headers["authorization"] !=""){
$token_recibido=$headers["authorization"];
//SI TE UN TOKEN

if(getUsr($token_recibido)) { 

    echo json_encode(getUsr($token_recibido));
}
}
}





?>
