let conditions = ["AIDS"];

function randomInt(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function test() {
  document.body.style.backgroundColor = "blue";
}

function init() {

}

function newDiagnosis() {
  let randCondition = "";
  let randTime = "0";
  let timeUnit = "";

  let l1 = document.getElementsByClassName("list1")[0];
  let l2 = document.getElementsByClassName("list2")[0];
  let l3 = document.getElementsByClassName("list3")[0];

  let val1 = l1.selectedIndex;
  let val2 = l2.selectedIndex;
  let val3 = l3.selectedIndex;

  randCondition = conditions[randomInt(0,(conditions.length-1))]

  let rand = randomInt(0,2);

  if (rand == 0) {
    timeUnit = "week";
    randTime = randomInt(1,7);
  }
  else if (rand == 1) {
    timeUnit = "month";
    randTime = randomInt(2,11);
  }
  else {
    timeUnit = "year";
    randTime = randomInt(1,5);
  }
  if (randTime != 1) {
    timeUnit += "s"
  }

  document.getElementsByClassName("diagnosis")[0].innerHTML = randCondition + ".";
  document.getElementsByClassName("time")[0].innerHTML = randTime + " " + timeUnit + " left.";

}
