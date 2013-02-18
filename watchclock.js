var watchDefault = 0;
var watchFormat = "00:00:00.0";
var watchMode = "start";
var watchLoop, watchToggle;
var watchStart = new Date().valueOf() + watchDefault;
var watchNow = watchStart;

function getElapsed()
{
 var elapsed = (watchNow.valueOf() - watchStart);
 var HH = Math.floor((Math.floor(elapsed / 1000)) / 3600);
 var HH = HH < 10 ? "0" + HH : HH;
 var MM = Math.floor(Math.floor((Math.floor(elapsed / 1000)) % 3600) / 60);
 var MM = MM < 10 ? "0" + MM : MM;
 var SS = Math.floor(Math.floor(elapsed / 1000) % 60);
 var SS = SS < 10 ? "0" + SS : SS;
 var MS =  Math.floor(Math.floor(elapsed % 1000) / 100);
 return HH + ":" + MM + ":" + SS + "." + MS;
}

function plusHour()
{
 watchStart -= 3600000;
 document.getElementById('watchtimer').innerHTML = getElapsed();
}

function minusHour()
{
 watchStart += 3600000;
 var diff = (watchNow.valueOf() - watchStart)/1000;
 if (diff < 0) { watchStart = watchNow.valueOf(); }
 document.getElementById('watchtimer').innerHTML = getElapsed();
}

function plusMin()
{
 watchStart -= 60000;
 document.getElementById('watchtimer').innerHTML = getElapsed();
}

function minusMin()
{
 watchStart += 60000;
 var diff = (watchNow.valueOf() - watchStart)/1000;
 if (diff < 0) { watchStart = watchNow.valueOf(); }
 document.getElementById('watchtimer').innerHTML = getElapsed();
}

function plusTen()
{
 watchStart -= 10000;
 document.getElementById('watchtimer').innerHTML = getElapsed();
}

function minusTen()
{
 watchStart += 10000;
 var diff = (watchNow.valueOf() - watchStart)/1000;
 if (diff < 0) { watchStart = watchNow.valueOf(); }
 document.getElementById('watchtimer').innerHTML = getElapsed();
}

function watchClock(watchMode)
{
 watchToggle = document.getElementById('watchButton').innerHTML;
 if(watchMode == "watchLoop")
 {
  watchNow = new Date();
  document.getElementById('watchtimer').innerHTML = getElapsed();
  watchLoop = setTimeout("watchClock('watchLoop');",100);
 }
 else if(watchToggle == "Stop")
 {
  window.clearInterval(watchLoop);
  document.getElementById('watchButton').innerHTML = "Start";
 }
 else
 {
  document.getElementById('watchButton').innerHTML = "Stop";
  watchClock("watchLoop");
 }
}

function resetClock()
{
 watchStart = new Date().valueOf() + watchDefault;
 watchNow = watchStart;
 document.getElementById('watchtimer').innerHTML = watchFormat;
}
