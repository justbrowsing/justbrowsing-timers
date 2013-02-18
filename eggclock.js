var eggDefault = 300000;
var eggFormat = "00:05:00.0";
var remaining = eggDefault;
var eggMode = "start";
var eggLoop, eggToggle;
var eggStart = new Date().valueOf() + eggDefault;
var eggNow = new Date().valueOf();
var remaining;
var hour = 3600000;
var minute = 60000;
var tensec = 10000;
var second = 1000;

function getRemaining()
{
 remaining = (eggStart - eggNow.valueOf());
 var HH = Math.floor((Math.floor(remaining / second)) / 3600);
 var HH = HH < 10 ? "0" + HH : HH;
 var MM = Math.floor(Math.floor((Math.floor(remaining / second)) % 3600) / 60);
 var MM = MM < 10 ? "0" + MM : MM;
 var SS = Math.floor(Math.floor(remaining / second) % 60);
 var SS = SS < 10 ? "0" + SS : SS;
 var MS =  Math.floor(Math.floor(remaining % second) / 100);
 return HH + ":" + MM + ":" + SS + "." + MS;
}

function addHour()
{
  eggStart += hour;
  document.getElementById('eggtimer').innerHTML = getRemaining();
}

function subHour()
{
  var diff = eggStart - eggNow.valueOf();
  if (diff > hour) { 
    eggStart -= hour;
  }
  else if(diff > minute*10) {
    eggStart -= minute*10;
  }
  else {
    eggStart = eggNow.valueOf();
  }
  document.getElementById('eggtimer').innerHTML = getRemaining();
}

function addMin()
{
  eggStart += minute;
  document.getElementById('eggtimer').innerHTML = getRemaining();
}

function subMin()
{
  var diff = eggStart - eggNow.valueOf();
  if (diff > minute) { 
    eggStart -= minute;
  }
  else if(diff > tensec) {
    eggStart -= tensec;
  }
  else {
    eggStart = eggNow.valueOf();
  }
  document.getElementById('eggtimer').innerHTML = getRemaining();
}

function addTen()
{
  eggStart += tensec;
  document.getElementById('eggtimer').innerHTML = getRemaining();
}

function subTen()
{
  var diff = eggStart - eggNow.valueOf();
  if (diff > tensec) { 
    eggStart -= tensec;
  }
  else if(diff > second) {
    eggStart -= second;
  }
  else {
    eggStart = eggNow.valueOf();
  }
  document.getElementById('eggtimer').innerHTML = getRemaining();
}

function eggCheck(diff) 
{
  if(remaining <= 0) {
   window.clearInterval(eggLoop); 
   document.getElementById('eggButton').innerHTML = "Start";
   gong.play();
   alert('Egg timer is done');
   eggStart = new Date().valueOf() + eggDefault;
   eggNow = new Date().valueOf();
   remaining = eggDefault;
   document.getElementById('eggtimer').innerHTML = eggFormat;
  }
}

function eggClock(eggMode)
{
 eggToggle = document.getElementById('eggButton').innerHTML;

 if(eggMode == "eggLoop")
 {
  eggNow = new Date();
  if((eggStart - eggNow.valueOf()) <= 0) {
   window.clearInterval(eggLoop); 
   document.getElementById('eggButton').innerHTML = "Start";
   gong.play();
   alert('Egg timer is done');
   resetEgg();
  }
  else {
    document.getElementById('eggtimer').innerHTML = getRemaining();
    eggLoop = setTimeout("eggClock('eggLoop');",100);
  }
 }
 else if(eggToggle == "Stop")
 {
  window.clearInterval(eggLoop);
  document.getElementById('eggButton').innerHTML = "Start";
 }
 else
 {
  eggStart = new Date().valueOf() + remaining; 
  if(remaining > 1000) { 
    document.getElementById('eggButton').innerHTML = "Stop";
    eggClock("eggLoop");
  }
 }
}

function resetEgg()
{
 eggStart = new Date().valueOf() + eggDefault;
 eggNow = new Date().valueOf();
 remaining = eggDefault;
 document.getElementById('eggtimer').innerHTML = eggFormat;
}
