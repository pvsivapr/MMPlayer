SubmitSong()
{
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.response);
          var data1 = this.response;
          var data4 = this.responseText;
          document.alert(data1);
      }
  };
  xmlhttp.open("POST", "AddSongFilesPHPService.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send();
}
