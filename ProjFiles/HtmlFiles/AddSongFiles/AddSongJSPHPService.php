<?php

$servername = "mysql4.gear.host";
$username = "mmplayerdb";
$password = "\$iva02071992mmplayer";
$dbName = "mmplayerdb";
$host = 3306;

echo json_encode($outp);
try
    {
      // header("Content-Type: application/json; charset=UTF-8");
      // $obj = json_decode($_POST["x"], false);
      // $conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
      // $result = $conn->query("SELECT name FROM ".$obj->table." LIMIT ".$obj->limit);
      // $outp = array();
      // $outp = $result->fetch_all(MYSQLI_ASSOC);
      $connn = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
      $connn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $sql = "INSERT INTO mmplayerdb.mmplayermovies (id, movieId, movieName, movieLogoURL, noOfSongs) VALUES ('$obj->id', '$obj->movie_id', '$obj->movie_name', '$obj->no_of_songs', '$obj->movie_logo_url')";
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
?>
