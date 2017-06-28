<?php

/*
include 'ChromePhp.php';
ChromePhp::log('This is just a log message');
ChromePhp::warn("This is a warning message " ) ;
ChromePhp::error("This is an error message" ) ;
ChromePhp::log($_SERVER);

// using labels
foreach ($_SERVER as $key => $value) {
    ChromePhp::log($key, $value);
     echo '<pre>';
    print_r("check 1");
    echo '</pre>';

}*/
$servername = "mysql4.gear.host";
$username = "mmplayerdb";
$password = "\$iva02071992mmplayer";
$dbName = "mmplayerdb";
$host = 3306;

// define variables and set to empty values
$id="";$mId="";$mName="";$mNoSongs="";$mLogo="";
$log_Err ="";
$shallAllow =false;

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if (empty($_POST["itemId"]))
    {
        $log_Err = "username is required";
        echo($log_Err);
    }
    else
    {
         if (empty($_POST["movieId"]))
         {
             $log_Err = "Firstname is required";
             echo($log_Err);
         }
        else
        {
            if (empty($_POST["movieName"]))
            {
                $log_Err = "lastname is required";
                echo($log_Err);
            }
            else
            {
                if (empty($_POST["movieLogoURL"]))
                {
                    $log_Err = "Mobile number is required";
                    echo($log_Err);
                }
                else
                {
                     if (empty($_POST["noOfSongs"]))
                     {
                         $log_Err = "Email is required";
                         echo($log_Err);
                     }
                    else
                    {
                      $id=$_POST["itemId"];
                      $mId=$_POST["movieId"];
                      $mName=$_POST["movieName"];
                      $mNoSongs=$_POST["noOfSongs"];
                      $mLogo=$_POST["movieLogoURL"];
                      $shallAllow=true;
                    }
                }
            }
        }
    }
    if($shallAllow==true)
    {
      try
          {
            $connn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
            $connn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO mmplayerdb.mmplayermovies (id, movieId, movieName, movieLogoURL, noOfSongs) VALUES ('$id', '$mId', '$mName', '$mLogo', '$mNoSongs')";
            $connn->exec($sql);
            echo "<script type='text/javascript'>alert('Added successfully :)')</script>";
             // echo "Added successfully";
          }
          catch(PDOException $e)
          {
            $errMsgss = "Connection failed: " . $e->getMessage();
            // echo "<script type='text/javascript'>alert('".$errMsgss."')</script>";
            echo "Connection failed: " . $e->getMessage();
            /*echo ('<script language="javascript">');
            echo ('alert(<?php $e->getMessage();  ?>)');  //not showing an alert box.
            echo ('</script>');
            */
          }
        }
      }
?>
