var lap = document.getElementById("lap");
var start = document.getElementById("start");
var display = document.getElementById("display");
var count = 0;
var countReset = 1;
var countLap = 1;
var counter = 0;
start.addEventListener("click", t);
var t = setInterval(() => {
  if (count == 1) {
    counter++;
    let ms = counter % 100;
    let ss = ~~(counter / 100) % 60;
    let mm = ~~(counter / 6000) % 60;
    ms = ms < 10 ? "0" + ms : ms;
    ss = ss < 10 ? "0" + ss : ss;
    mm = mm < 10 ? "0" + mm : mm;

    let time = mm + ":" + ss + ":" + ms;
    document.getElementById("display").innerText = time;
  }
}, 10);

function one() {
  playSound("./sound/alert.mp3");
  count++;
  if (count == 1) {
    countReset = 1;
    lap.innerText = "Lap";
    lap.style.visibility = "visible";
    start.innerText = "Stop";
    start.setAttribute("class", "btnr");
  }
  if (count == 2) {
    start.innerText = "Continue";
    lap.innerText = "Reset";
    countReset = 0;
    count = 0;
    start.setAttribute("class", "btng");
  }
}
function two() {
  if (countReset == 0) {
    count = 0;
    countReset = 1;
    countLap = 1;
    counter = 0;
    display.innerText = "00:00:00";
    start.innerText = "Start";
    lap.innerText = "Lap";
    lap.style.visibility = "hidden";
    start.setAttribute("class", "btn");
    let element = document.getElementsByClassName('task');
    while(element.length>0)
    {
      element[0].parentNode.removeChild(element[0]);
    }
    let line=document.getElementsByTagName('hr');
    while(line.length>1)
    {
      line[0].parentNode.removeChild(line[0]);
    }

  } else {
    playSound("./sound/sound.wav");
    let divElement = document.createElement("div");
    let parent = document.getElementById("main");
    divElement.setAttribute("class", "task");
    parent.appendChild(divElement);

    let lapName = document.createElement("span");
    lapName.setAttribute("class", "lapName");
    divElement.appendChild(lapName);
    lapName.innerText = "Lap" + " " + countLap;

    let lapTime = document.createElement("span");
    lapTime.setAttribute("class", "lapTime");
    divElement.appendChild(lapTime);
    lapTime.innerText = display.innerText;

    let line = document.createElement("hr");
    parent.appendChild(line);

    countLap++;
  }
}
function playSound(path) {
  let sound = new Audio(path);
  sound.play();
}
