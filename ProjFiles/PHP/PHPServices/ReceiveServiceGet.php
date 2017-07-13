<?php
require_once("ServiceController.php");
class GETService
{
    function sendGETService($userRequest, $json)
    {
        $rh = new RequestHandler();
        $raw = $rh -> Request_Handler($userRequest, $json);
        $response = $this->encodeJson($raw);
        return $response;
    }
    
    function encodeJson($responseData) 
    {
		$jsonResponse = json_encode($responseData);
		//var_dump("receiveservice.php".$jsonResponse);
		return $jsonResponse;
	}
    
    //else
    //{
    //    $rh = new RequestHandler();
    //    $userRequest ="";
    //    if(isset($_GET["userRequest"]))
    //    {
    //        $userRequest = $_GET["userRequest"];
    //        //echo $userRequest."\n";
    //    }
    //    else
    //    {
    //        $userRequest="faultRequest";
    //    }
    //    $json = json_decode(file_get_contents('php://input'),true);
    //    $raw = $rh -> Request_Handler($userRequest, $json);
    //    $response = json_encode($raw);
    //    echo $response;
    //}
}

?>
