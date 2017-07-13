<?php

require_once("ServiceController.php");

class POSTService
{
    function sendPOSTService($requestContentType, $userRequest, $json)
    {
        $rh = new RequestHandler();
        if(strpos($requestContentType,'application/json') !== false)
        {
            //here we are converting data from json object to an array
            $json = json_decode(file_get_contents('php://input'),true);
            $raw = $rh -> Request_Handler($userRequest, $json);
            $response = $this->encodeJson($raw);
            return $response;
            //echo $response."\n";
        }
        else if(strpos($requestContentType,'text/html') !== false)
        {
            print_r($_REQUEST."\n");
            //echo $response;
        }
        else if(strpos($requestContentType,'application/xml') !== false)
        {
            $response = new SimpleXMLElement($response);
            print_r($_REQUEST."\n");
            //echo $response;
        }
        else if(strpos($requestContentType,'application/x-www-form-urlencoded') !== false)
        {
            $response = new SimpleXMLElement($response);
            print_r($_REQUEST."\n");
            //echo $response;
        }
        else
        {
            
        }
    }
    
    function encodeXml($responseData)
    {
        // creating object of SimpleXMLElement
        $xml = new SimpleXMLElement('<?xml version="1.0"?><mobile></mobile>');
        foreach($responseData as $key=>$value) 
        {
            $xml->addChild($key, $value);
        }
        return $xml->asXML();
    }
    
    function encodeHtml($responseData)
    {
        
        $htmlResponse = "<table border='1'>";
        foreach($responseData as $key=>$value)
        {
            $htmlResponse .= "<tr><td>". $key. "</td><td>". $value. "</td></tr>";
        }
        $htmlResponse .= "</table>";
        return $htmlResponse;
    }
    
    
    function encodeJson($responseData)
    {
        $jsonResponse = json_encode($responseData);
        //var_dump("receiveservice.php".$jsonResponse);
        return $jsonResponse;
    }
}
?>
