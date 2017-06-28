function getUIData()
{
  var bodyLeftUI = document.getElementById("audioLeftBody");
  var SongInfoUI = document.getElementById("songInfoBody");
  bodyLeftUI.removeChild(SongInfoUI);
  // localStorage.setItem("hello", y);
  // document.write("<div id=\"lvtemplate\" style=\" position:static; margin:auto; padding-top: 12px; padding-right: 13px; padding-bottom: 16px; padding-left: 15px; height:400px; width:160px; float:left; vertical-align:middle\">"+"\n"+"<center>"+"\n"+"<h2>"+"\n"+" hi, hello"+"\n"+"</h2>"+"\n"+"<a href=\"http://www.google.com\" >"+"\n"+"<img src=ProjFiles"+"\\"+"Images"+"\\"+"image12.jpg />"+"\n"+"</a>"+"\n"+"<h3>"+"\n"+"see you..."+"\n"+"</h3>"+"\n"+"</center>"+"\n"+"</div>");

obj = { "table":"customers", "limit":10 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var urlsong = "https://docs.google.com/uc?export=download&id=0Bwpe9ad5TblvMlAzbWxsVWxDdU0";//"https://drive.google.com/file/d/0Bwpe9ad5TblvMlAzbWxsVWxDdU0/view";
        var myObj = JSON.parse(this.response);
        // var dataa1 = myObj.movie_details;
        // var dataa2 = myObj.movie_details[0];
        // var dataa3 = myObj.movie_details[1];
        // var dataa4 = myObj.movie_details[2];
        // var dataa5 = myObj.movie_details[3];
        // var dataaa1 = this.response;
        // var dataaa2 = this.responseType;
        // var dataaa3 = this.responseXML;
        // var dataaa4 = this.responseText;
        // var dataaa5 = this.getResponseHeader;
        for(i=0; i<myObj.movie_details.length; i++ )
        {

            var songBody = "<div id=\"songInfoBody\" style=\"display: block; height : 12%; width : 100%; margin: 0px; padding : 0px; overflow : auto;\">"+
      "<img id=\"musicImg\" style=\"height : 100%; width : 25%; float:left\" src=\"https://docs.google.com/uc?export=download&id="+myObj.movie_details[i].movieLogoURL+"\" type=\"image/jpg\" >"+
      "</img>"+
      "<p align=\"left\" style=\"width : 75%; float:left;\">"+myObj.movie_details[i].movieName+"</p>"+
    "</div>";

            /*var songBody = "<div id=\"songInfoBody\" style=\"display: block; height : 12%; width : 100%; margin: 0px; padding : 0px; overflow : auto;\">"+
      "<img id=\"musicImg\" style=\"height : 100%; width : 25%; float:left\" src=\""+urlsong+"\" type=\"image/jpg\" >"+
      "</img>"+
      "<p align=\"left\" style=\"width : 75%; float:left;\">"+myObj.movie_details[i].movieName+"</p>"+
    "</div>";

            var songBody = "<div id=\"songInfoBody\" style=\"display: block; height : 12%; width : 100%; margin: 0px; padding : 0px; overflow : auto;\">"+
      "<img id=\"musicImg\" style=\"height : 100%; width : 25%; float:left\" src=\""+myObj.movie_details[i].movieLogoURL+"\" type=\"image/jpg\" >"+
      "</img>"+
      "<p align=\"left\" style=\"width : 75%; float:left;\">"+myObj.movie_details[i].movieName+"</p>"+
    "</div>";

            var songBody = "<div id=\"songInfoBody\" style=\"display: block; height : 12%; width : 100%; margin: 0px; padding : 0px; overflow : auto;\">"+
      "<img id=\"musicImg\" style=\"height : 100%; width : 25%; float:left\" src=\"..\\Images\\music"+i+".jpg\" type=\"image/jpg\" >"+
      "</img>"+
      "<p align=\"left\" style=\"width : 75%; float:left;\">"+myObj.movie_details[i].movieName+"</p>"+
    "</div>";*/


            bodyLeftUI.innerHTML += songBody;
        }

        var data1 = this.response;
        var data2 = this.responseType;
        var data3 = this.responseXML;
        var data4 = this.responseText;
        var data5 = this.getResponseHeader;

    }
};
xmlhttp.open("GET", "../PHP/PHPServices/ReceiveService.php?userRequest=GetAllMovies", true);
xmlhttp.setRequestHeader("Content-type", "application/json");
xmlhttp.send();

  /*for(var i= 1; i<12; i++)
  {
    // var musicImage = document.getElementById("musicImg");
    // musicImage.src = "../Images/music"+i.toString()+".jpg";
    // var z = SongInfoUI.cloneNode(true);
    // bodyLeftUI.appendChild(z);
    var songBody = "<div id=\"songInfoBody\" style=\"display: block; height : 12%; width : 100%; margin: 0px; padding : 0px; overflow : auto;\">"+
      "<img id=\"musicImg\" style=\"height : 100%; width : 25%; float:left\" src=\"..\\Images\\music"+i.toString()+".jpg\" type=\"image/jpg\" >"+
      "</img>"+
      "<p align=\"left\" style=\"width : 75%; float:left;\">This Song</p>"+
    "</div>";
    bodyLeftUI.innerHTML += songBody;
    // var musicImage = document.getElementById("musicImg");
    // musicImage.src = "../Images/music"+i.toString()+".jpg";
  }*/

  var bodyMiddleUI = document.getElementById("audioMiddleBody");
  for(var i= 1; i<100; i++)
  {
    var songList = "<input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"> I have a bike<br>";
    bodyMiddleUI.innerHTML += songList;
  }

}

function control() {
  var yourAudio = document.getElementById('audioPlayer'),
      ctrl = document.getElementById('audioControl');
    // Update the Button
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};

var audioVolume = 0.4;
var retEvent;
function AudioAction(choice)
{
  var yourAudio = document.getElementById('audioPlayer');
  if(choice == "PrevSong")
  {
  }
  else if (choice == "Stop")
  {
    if(doesSongStart == true)
    {
      yourAudio['stop']();
    }
  }
  else if (choice == "Pause")
  {
    if(doesSongStart == true)
    {
      yourAudio['pause']();
      doesSongStart = false;
      clearTimeout(retEvent);
    }
  }
  else if (choice == "Start")
  {
    if(doesSongStart == false)
    {
      yourAudio['play']();
      doesSongStart = true;
      retEvent = setInterval(SongProgress, 50);
    }
  }
  else if (choice == "NextSong")
  {
  }
  else if (choice == "Shuffle")
  {
    audioVolume = audioVolume-0.1;
    if(audioVolume < 0)
    {
      audioVolume = 0;
    }
    yourAudio.volume = audioVolume;
  }
  else if (choice == "Share")
  {
    audioVolume = audioVolume+0.1;
    if(audioVolume > 1)
    {
      audioVolume = 1;
    }
    yourAudio.volume = audioVolume;
  }
  else if (choice == "")
  {
  }
  else
  {
  }
}
var doesSongStart = false;
function SongProgress(pogressValue)
{
  var yourprogress = document.getElementById('custProg');
  var yourAudio = document.getElementById('audioPlayer');
  var curTime = yourAudio.currentTime;
  var totalTime = yourAudio.duration;
  // var progress1 = (((totalTime - curTime)/totalTime)*100);
  var progress1 = ((curTime/totalTime)*100);
  yourprogress.value = progress1;
}

var mouse = false;
var position = "";
function MouseDown()
{
  mouse = true;
  var yourprogress = document.getElementById('custProg');
  var paragrap = document.getElementById('textValue');
  yourprogress.style.color="red";
  yourprogress.style.bgcolor="red";
  // yourprogress.value="44";
  document.getElementById('custProg').addEventListener('click', function (e) {
      var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
          y = e.pageY - this.offsetTop,  // or e.offsetY
          clickedValue = x * this.max / this.offsetWidth,
          isClicked = clickedValue <= this.value;
          yourprogress.value = clickedValue;

          /*
      if (isClicked) {
        position = position + clickedValue.toString();
        yourprogress.value = clickedValue;
        paragrap.innerHTML = paragrap.innerHTML + 'Extra stuff';
        paragrap.Appended(position);
          // alert('You clicked within the value range at: ' + clickedValue);
      }
      */
  });
}

function MouseUp()
{

  mouse = false;
  /*
  var yourprogress = document.getElementById('custProg');
  yourprogress.style.color="green";
  // yourprogress.value="66";
  document.getElementById('custProg').addEventListener('click', function (e) {
      var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
          y = e.pageY - this.offsetTop,  // or e.offsetY
          clickedValue = x * this.max / this.offsetWidth,
          isClicked = clickedValue <= this.value;

      if (isClicked) {
        position = position + clickedValue.toString();
        yourprogress.value = clickedValue;
        paragrap.innerHTML = position;
          // alert('You clicked within the value range at: ' + clickedValue);
      }
  });
  */
}

function MouseMoved()
{
  if(mouse)
  {
    var yourprogress = document.getElementById('custProg');
    var paragrap = document.getElementById('textValue');
    document.getElementById('custProg').addEventListener('click', function (e) {
        var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
            y = e.pageY - this.offsetTop,  // or e.offsetY
            clickedValue = x * this.max / this.offsetWidth,
            isClicked = clickedValue <= this.value;
            yourprogress.value = clickedValue;

            /*
        if (isClicked) {
          position = position + clickedValue.toString();
          yourprogress.value = clickedValue;
          paragrap.innerHTML = paragrap.innerHTML + 'Extra stuff';
            // alert('You clicked within the value range at: ' + clickedValue);
        }
        */
    });
  }
}

// document.getElementById('custProg').addEventListener('click', function (e) {
//     var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
//         y = e.pageY - this.offsetTop,  // or e.offsetY
//         clickedValue = x * this.max / this.offsetWidth,
//         isClicked = clickedValue <= this.value;
//
//     if (isClicked) {
//         alert('You clicked within the value range at: ' + clickedValue);
//     }
// });
