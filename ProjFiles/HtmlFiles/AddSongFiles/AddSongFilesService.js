SubmitSong()
{$id=$_POST["itemId"];
$mId=$_POST["movieId"];
$mName=$_POST["movieName"];
$mNoSongs=$_POST["noOfSongs"];
$mLogo=$_POST["movieLogoURL"];

  var x1 = document.forms["logForm"]["itemId"].value;
  var x2 = document.forms["logForm"]["movieId"].value;
  var x3 = document.forms["logForm"]["movieName"].value;
  var x4 = document.forms["logForm"]["noOfSongs"].value;
  var x5 = document.forms["logForm"]["movieLogoURL"].value;
  var postObject = { "id":x1, "movie_id":x2, "movie_name":x3, "no_of_songs":x4, "movie_logo_url":x5 };
  dbParam = JSON.stringify(postObject);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.response);
          var data1 = this.response;
          var data4 = this.responseText;
          document.alert(data1);
      }
  };
  xmlhttp.open("POST", "AddSongFilesJSPHPService.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send("x=" + dbParam);
}
