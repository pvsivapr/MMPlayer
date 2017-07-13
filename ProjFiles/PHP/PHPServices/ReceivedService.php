<?php

//require_once("UserService.php");
require_once("ServiceController.php");
require_once("ReceiveServicePOST.php");
require_once("ReceiveServiceGET.php");

//to get post or get or .. request method type
$method = $_SERVER['REQUEST_METHOD'];
//echo $method."\n";

//to get values from url that attached
$userRequest = "";
if(isset($_GET["userRequest"]))
{
    $userRequest = $_GET["userRequest"];//sendPOSTService
    //echo $userRequest."\n";
}
else
{
    $userRequest="faultRequest";
}

//$rawData = array('error' => 'No mobiles found!',
//'method' => $method);
$rawData = json_decode(file_get_contents('php://input'),true);

if(strpos($method,'POST' !== false))
{
    $servPOST = new POSTService();
    //to get data type like xml or json or text type
    $requestContentType = $_SERVER["CONTENT_TYPE"];
    //echo $requestContentType."\n";
    $json = json_decode(file_get_contents('php://input'),true);
    $response = $servPOST -> sendPOSTService($requestContentType, $userRequest, $json);
    echo $response."\n";
}
else
{
    $servGet = new GETService();
    $json = json_decode(file_get_contents('php://input'),true);
    $response = $servGet -> sendGETService($userRequest, $json);
    echo $response."\n";
}

?>
