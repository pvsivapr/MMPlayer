var myList = new Array();
var z =0;
    //  myList.push('Hello');
function getUIData()
{
  var bodyLeftUI = document.getElementById("audioLeftBody");
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
        var urlsong = "https://docs.google.com/uc?export=download&id=0Bwpe9ad5TblvMlAzbWxsVWxDdU0";//"https://drive.google.com/file/d/0Bwpe9ad5TblvMlAzbWxsVWxDdU0/view";
        var myObj = JSON.parse(this.response);
        var songBody="";
        for(i=0; i<myObj.movie_details.length; i++ )
        {
          songBody += "<div id=\"songInfoBody\" data-info=\"some info here\" data-other-info=\"more info here\" style=\"display: block; height : 12%; width : 100%; margin: 0px; padding : 0px; overflow : auto;\">"+
          "<img id=\"musicImg\" style=\"height : 100%; width : 25%; float:left\" src=\"https://docs.google.com/uc?export=download&id="+myObj.movie_details[i].movieLogoURL+"\" type=\"image/jpg\" >"+
          "</img>"+
          "<p align=\"left\" style=\"width : 75%; cursor:pointer; float:left;\" data-id=\""+myObj.movie_details[i].movieId+"\" data-option=\""+myObj.movie_details[i].movieLogoURL+"\" onClick=\"getSongsData(this)\">"+myObj.movie_details[i].movieName+"</p>"+
          "</div>";
        }
        bodyLeftUI.innerHTML = songBody;
      }
    };
    xmlhttp.open("GET", "../PHP/PHPServices/ReceiveService.php?userRequest=GetAllMovies", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}

function searchBackClicked(e)
{
  if(e.dataset.id == "back")
  {
    var searBck = document.getElementById("searchBack");
    searBck.src = "../Images/search128.png";
    searBck.dataset.id = "search";
    getUIData();
  }
  else {
    alert("clicked search");
  }
}

function getSearch(e)
{
  // alert(e.value);
}

function getSongsData(e)
{
  var searBck = document.getElementById("searchBack");
  searBck.src = "../Images/arrowBack128.png";
  searBck.dataset.id = "back";

  var bodyMiddleUI = document.getElementById("audioMiddleBody");
  // var bodyLeftUI = document.getElementById("audioLeftBody");

  alert("selsct songs");
  var SongInfoUI = document.getElementById("songInfoBody");
  var bodyMiddleUI = document.getElementById("audioMiddleBody");
  obj = { "movieId":e.dataset.id };
  dbParam = JSON.stringify(obj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.response);
          var songBody="";
         for(i=0; i<myObj.SongDetails.length; i++ )
         {
             var datts = myObj.SongDetails[i];
             var dattss = JSON.stringify(datts);
             var _songData={ "songId":myObj.SongDetails[i].songId, "movieId":myObj.SongDetails[i].movieId, "movieName":myObj.SongDetails[i].movieName, "songName":myObj.SongDetails[i].songName, "songURL":myObj.SongDetails[i].songURL };
             var song_Data = '{"data":"hello world"}';
             var songData="{ songId:"+myObj.SongDetails[i].songId+", movieId:"+myObj.SongDetails[i].movieId+", movieName:"+myObj.SongDetails[i].movieName+", songName:"+myObj.SongDetails[i].songName+", songURL:"+myObj.SongDetails[i].songURL+"}";
             songBody += "<div id=\"songInfoBody\" data-info=\"some info here\" data-other-info=\"more info here\" style=\"display: block; height : 12%; width : 100%; margin: 0px; padding : 0px; overflow : auto;\">"+
       "<img id=\"musicImg\" style=\"height : 100%; width : 25%; float:left\" src=\"https://docs.google.com/uc?export=download&id="+e.dataset.option+"\" type=\"image/jpg\" >"+
       "</img>"+
       "<p align=\"left\" style=\"width : 75%; cursor:pointer; float:left;\" data-object=\""+"\""+dattss+"\""+"\" data-id=\""+myObj.SongDetails[i].songName+"\" data-info=\""+myObj.SongDetails[i].songURL+"\" onClick=\"selectSongData(this)\">"+myObj.SongDetails[i].songName+"</p>"+
     "</div>";
         }
         bodyMiddleUI.innerHTML = songBody;
         alert(this.response);
          var data1 = this.response;
          var data2 = this.responseType;
          var data3 = this.responseXML;
          var data4 = this.responseText;
          var data5 = this.getResponseHeader;
      }
  };
  xmlhttp.open("POST", "../PHP/PHPServices/ReceiveService.php?userRequest=GetAllSongs", true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send(dbParam);
  alert(e.dataset.id+"\n"+e.dataset.option);
}

function strToJson(str) {
  eval("var x = " + str + ";");
  return JSON.stringify(x);
}

function selectSongData(e)
{
    var bodyRightTopUI = document.getElementById("audioRightTopBody");
    var pos = 0;
    pos = bodyRightTopUI.innerHTML.search(e.dataset.info);
    if(pos < 0 || pos === -1 || pos === 0)
    {
      alert("e.dataset.object");
      alert(e.dataset.object);
      var songList = "<input type=\"checkbox\" name=\"vehicle\" value=\"Bike\"  data-info=\""+e.dataset.info+"\"  data-object=\""+e.dataset.object+"\" checked >"+e.dataset.id+"<br>";
      bodyRightTopUI.innerHTML += songList;
      // { date: '12/1/2011', reading: 3, id: 20055 },
      myList.push({ SongUrlId: e.dataset.info, SongUrlName: e.dataset.id, SongNo: myList.length+1});
    }
    else
    {
      alert("Song already added");
    }
}

function control()
{
    var yourAudio = document.getElementById('audioPlayer'),
    ctrl = document.getElementById('audioControl');
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();
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
      yourAudio.src="https://docs.google.com/uc?export=download&id="+myList[z].SongUrlId
      yourAudio['play']();
      doesSongStart = true;
      retEvent = setInterval(SongProgress, 50);
    }
  }
  else if (choice == "NextSong")
  {
    yourAudio['pause']();
    z=z+1;
    yourAudio.src="https://docs.google.com/uc?export=download&id="+myList[z].SongUrlId
    yourAudio['play']();
    doesSongStart = true;
    retEvent = setInterval(SongProgress, 50);
  }
  else if (choice == "Shuffle")
  {
    // audioVolume = audioVolume-0.1;
    // if(audioVolume < 0)
    // {
    //   audioVolume = 0;
    // }
    // yourAudio.volume = audioVolume;
  }
  else if (choice == "Share")
  {
    // audioVolume = audioVolume+0.1;
    // if(audioVolume > 1)
    // {
    //   audioVolume = 1;
    // }
    // yourAudio.volume = audioVolume;
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
  // var yourprogress = document.getElementById('custProg');
  // var yourAudio = document.getElementById('audioPlayer');
  // var curTime = yourAudio.currentTime;
  // var totalTime = yourAudio.duration;
  // var progress1 = ((curTime/totalTime)*100);
  // yourprogress.value = progress1;
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
  });
}

function MouseUp()
{
  mouse = false;
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
    });
  }
}
