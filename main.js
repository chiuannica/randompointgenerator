var bballPt;
var roundPts = 0;
var p1TotalPts = 0, p2TotalPts = 0;
var p1, p2;
var i, j;
var p1list = [], p2list = [];
var rounds = 10;

function percents(){
  per1 = document.getElementById('percent1').value;
  document.getElementById("value1").innerHTML = per1 + "%";
  per2 = document.getElementById('percent2').value;
  document.getElementById("value2").innerHTML = per2 + "%";
  per3 = document.getElementById('percent3').value;
  document.getElementById("value3").innerHTML = per3 + "%";
}
percents();


//Get a random number 0 and up to max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//Basketball shots are worth 1-3, player may have lost ball
bballPt = getRandomInt(4);

function p1Round(bballPt){
  var madeit = Math.random();
  p1 = {
    threePt: per1/100,
    twoPt: per2/100,
    onePt: per3/100,
    name: "Freddie Fredderson"
  };

  if (bballPt == 3){
    if (madeit > p1.threePt){ //Missed the basket
      roundPts = 0;
    }else if(madeit <= p1.threePt){ //Made it
      roundPts = 3;
    }
  }else if (bballPt == 2){
    if (madeit > p1.twoPt){
      roundPts = 0;
    }else if(madeit <= p1.twoPt){
      roundPts = 2;
    }
  }else if (bballPt == 1){
    if (madeit > p1.onePt){
      roundPts = 0;
    }else if(madeit <= p1.onePt){
      roundPts = 1;
    }
  }else{
    madeit = 0;
    roundPts = 0;
  }
  return roundPts;
  document.getElementById("p1").innerHTML = "Hello?"
}
function p2Round(bballPt){
  var madeit = Math.random();

  p2 = {
    threePt: 0.3,
    twoPt: 0.7,
    onePt: 0.9,
    name: "Johnny Johnson"
  };

  if (bballPt == 3){
    if (madeit > p2.threePt){ //Missed the basket
      roundPts = 0;
    }else if(madeit <= p2.threePt){ //Made it
      roundPts = 3;
    }
  }else if (bballPt == 2){
    if (madeit > p2.twoPt){
      roundPts = 0;
    }else if(madeit <= p2.twoPt){
      roundPts = 2;
    }
  }else if (bballPt == 1){
    if (madeit > p2.onePt){
      roundPts = 0;
    }else if(madeit <= p2.onePt){
      roundPts = 1;
    }
  }else{
    madeit = 0;
    roundPts = 0;
  }
  return roundPts;
}

function p1(){
  for(i = 0; i < rounds; i++){
    var p1RoundPts;
    var p1GoesFor = getRandomInt(4);

    p1RoundPts = p1Round(p1GoesFor);
    p1TotalPts += p1RoundPts;
    p1list.push(p1TotalPts);
  }
}
function p2(){
  for(i = 0; i < rounds; i++){
    var p2RoundPts;
    var p2GoesFor = getRandomInt(4);

    p2RoundPts = p2Round(p2GoesFor);
    p2TotalPts += p2RoundPts;
    p2list.push(p2TotalPts);
  }
}
function makeTable() {
  var k;
  var makeTr, makeTd, innerTd;
  var findId;

  makeTr = document.createElement("tr");

  makeTd = document.createElement("td");
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode("Round");
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p1.name);
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p2.name);
  makeTd.appendChild(innerTd);

  findId = document.getElementById("tbl");

  findId.appendChild(makeTr);
  for(k = 0; k < rounds; k++){
    var roundNum = k + 1;

    makeTr = document.createElement("tr");

    makeTd = document.createElement("td");
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(roundNum);
    makeTd.appendChild(innerTd);

    makeTd = document.createElement("td");
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(p1list[k]);
    makeTd.appendChild(innerTd);

    makeTd = document.createElement("td");
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(p2list[k]);
    makeTd.appendChild(innerTd);

    findId = document.getElementById("tbl");

    findId.appendChild(makeTr);
  }
}

function reload(){
  alert(p1.threePt);
  percents();
  p1();
  p2();
  makeTable();
}
reload();
