function SubmitMovie()
{
  // var obj, dbParam, xmlhttp, myObj, x, txt = "";
  var x1 = document.forms["addMovieForm"]["itemId"].value;
  var x2 = document.forms["addMovieForm"]["movieId"].value;
  var x3 = document.forms["addMovieForm"]["movieName"].value;
  var x4 = document.forms["addMovieForm"]["noOfSongs"].value;
  var x5 = document.forms["addMovieForm"]["movieLogoURL"].value;
  var postObject = { "id":x1, "movie_id":x2, "movie_name":x3, "no_of_songs":x4, "movie_logo_url":x5 };
  dbParam = JSON.stringify(postObject);
  dbParam2 = 'id='+x1+'&movie_id='+x2+'&movie_name='+x3+'&no_of_songs='+x4+'&movie_logo_url='+x5;
  xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
//          var myObj = JSON.parse(this.response);
          var data1 = this.response;
          var data4 = this.responseText;
          alert(data1);
      }
      else if(this.readyState == 4){
          var data1 = this.response;
          var data4 = this.responseText;
          var data5 = xmlhttp.status;
      }
  };
  xmlhttp.open("POST", "AddSongJSPHPService.php");
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//  xmlhttp.setRequestHeader("Content-type", "application/json");
xmlhttp.setRequestHeader("Cache-Control", "no-cache");
xmlhttp.withCredentials = true;
xmlhttp.send("x=" + dbParam);
}

function SubmitSong()
{
  var x1 = document.forms["addSongForm"]["itemId"].value;
  var x2 = document.forms["addSongForm"]["movieId"].value;
  var x3 = document.forms["addSongForm"]["movieName"].value;
  var x4 = document.forms["addSongForm"]["noOfSongs"].value;
  var x5 = document.forms["addSongForm"]["movieLogoURL"].value;
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
  xmlhttp.open("POST", "AddSongJSPHPService.php", true);
//  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send("x=" + dbParam);
}