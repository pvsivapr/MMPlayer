function getUIData()
{
  var bodyLeftUI = document.getElementById("audioLeftBody");
  var SongInfoUI = document.getElementById("songInfoBody");
  bodyLeftUI.removeChild(SongInfoUI);
  // localStorage.setItem("hello", y);
  for(var i= 1; i<12; i++)
  {

    var z = SongInfoUI.cloneNode(true);
    bodyLeftUI.appendChild(z);
    var musicImage = document.getElementById("musicImg");
    musicImage.src = "../Images/music"+i.toString()+".jpg";
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
