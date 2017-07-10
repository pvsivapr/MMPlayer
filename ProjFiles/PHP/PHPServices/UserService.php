<?php

require_once("ConnectionService.php");
require_once("ServerStatus.php");

class UserServices extends ServerStatus
{
    function Connection()
    {
        $getConnService = new GetConnectionService();
        $conn = $getConnService -> getConnection();
        return $conn;
    }

    function Register($data)
    {
        try
        {
            $uName = $data['user_name'];
            $uPwd = $data['password'];
            $uFName = $data['user_first_name'];
            $uLName = $data['user_last_name'];
            $uMobileNo = $data['user_mobile_no'];
            $uEmailId = $data['user_email'];

            $conn = $this->Connection();
            $sql = "INSERT INTO webhostdb.userinfo (uname, password, first_name, last_name, mobile_no, email_id, profile_pic ) VALUES ( '$uName', '$uPwd', '$uFName', '$uLName', '$uMobileNo', '$uEmailId', 'no pic' )";

            $conn->exec($sql);

            $response = array("message"=>"User Registration is successful",
                             "code"=>"1"
                             );
            return $response;
        }
        catch(PDOException $e)
        {
            $response = array("message"=>"User Registration is un-successful",
                             "code"=>"0"
                             );
            return $response;
            //echo "Connection failed: " . $e->getMessage();
        }
    }

    function Login($data)
    {
        try
        {
            $uName = $data['user_name'];
            $uPwd = $data['password'];
            //echo $uname;
            //echo $upwd;
            $conn = $this->Connection();

            $sql = "SELECT * from webhostdb.userinfo WHERE uname="."\"".$uName."\"";
            //echo $sql;
            // prepare sql and bind parameters
            $res_data = $conn->prepare($sql);
            $res_data->execute();

            // set the resulting array to associative
            $_response = $res_data->setFetchMode(PDO::FETCH_ASSOC);
            $response = $res_data->fetchAll();
            //var_dump($response);

            if($response[0]['password'] == $uPwd)
            {
            	//var_dump($response[0]['password']);
            	//var_dump($upwd);

                //mention the values of response as mentioned in database
                $uName = $response[0]['uname'];
                $uPwd = $response[0]['password'];
                $uFName = $response[0]['first_name'];
                $uLName = $response[0]['last_name'];
                $uMobileNo = $response[0]['mobile_no'];
                $uEmailId = $response[0]['email_id'];

                $user_data = array(
                    "user_name"=>$uName,
                    "password"=>$uPwd,
                    "user_first_name"=>$uFName,
                    "user_last_name"=>$uLName,
                    "user_mobile_no"=>$uMobileNo,
                    "user_email"=>$uEmailId
                );

                //var_dump($user_data);

                $response = array(
                    "message"=>"Login is successful",
                    "code"=>"1",
                    "UserDetails"=>$user_data
                );
                return $response;
            }
            else
            {
                $user_data = array();
                $response = array("message"=>"username/*password is incorrect",
                             "code"=>"0",
                            "UserDetails"=>$user_data
                             );
                return $response;
            }
        }
        catch(PDOException $e)
        {
            $user_data = array();
            $response = array("message"=>"*username/password is incorrect",
                             "code"=>"0",
                              "UserDetails"=>$user_data
                             );
            return $response;
            //echo "Connection failed: " . $e->getMessage();
        }
    }

    function GetMovies()
    {
        try
        {
            $conn = $this->Connection();

            $sql = "SELECT * from mmplayerdb.mmplayermovies";
            $res_data = $conn->prepare($sql);
            $res_data->execute();

            // set the resulting array to associative
            $_response = $res_data->setFetchMode(PDO::FETCH_ASSOC);
            $response_ = $res_data->fetchAll();

//             "id" = $response[0]['id'];
//                "mName" = $response[0]['movieName'];
//                "mId" = $response[0]['movieId'];
//                "noOfSongs" = $response[0]['noOfSongs'];

            $movies_data = $response_;
            $response = array("message"=>"Service is successful",
                             "code"=>"1",
                              "movie_details"=>$movies_data
                             );
            $conn = null;
            return $response;
//            $conn->close();
        }
        catch(PDOException $e)
        {
            $movies_data = array();
                $response = array("message"=>"Movies list are empty",
                             "code"=>"0",
                            "movie_details"=>$movies_data
                             );
                return $response;
            //echo "Connection failed: " . $e->getMessage();
        }
    }

    function GetSongs($data)
    {
        try
        {
            $movieId = $data['movieId'];
            $conn = $this->Connection();
            $sql = "SELECT * from mmplayerdb.mmplayersongs WHERE movieId="."\"".$movieId."\"";
            $res_data = $conn->prepare($sql);
            $res_data->execute();
            $_response = $res_data->setFetchMode(PDO::FETCH_ASSOC);
            $response = $res_data->fetchAll();
            $response = array(
                    "message"=>"Login is successful",
                    "code"=>"1",
                    "SongDetails"=>$response
                );
                return $response;
        }
        catch(PDOException $e)
        {
          // echo 'Exception -> ';
          //   var_dump($e->getMessage());
            $user_data = array();
            $response = array("message"=>"Songs cannot be retrived.".$e->getMessage(),
                             "code"=>"0",
                              "UserDetails"=>""
                             );
            return $response;
            //echo "Connection failed: " . $e->getMessage();
        }
    }

    function AllUsers($data)
    {

    }

    function FaultMethod($data)
    {

    }

}

?>
