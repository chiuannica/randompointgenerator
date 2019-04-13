var bballPt;
var roundPts = 0;
var p1TotalPts = 0, p2TotalPts = 0;
var p1, p2;
var i, j;
var p1list = [], p2list = [];
var rounds = 10;

/*
Get user input for 3/2/1 pt rate i.e. 45% 3pt like Steph Curry
*/
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

/*
function for player 1 that randomly determines if
they made the shot and how many points they get
*/
function p1Round(bballPt){
  var madeit = Math.random();
  p1 = {
    threePt: per1/100, //user input for player's stats
    twoPt: per2/100,
    onePt: per3/100,
    name: "Freddie Fredderson"
  };

  if (bballPt == 3){
    if (madeit > p1.threePt){       //Missed the basket
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

/*
function for player 2 that randomly determines if
they made the shot and how many points they get
*/
function p2Round(bballPt){
  var madeit = Math.random();

  p2 = {
    threePt: 0.3,
    twoPt: 0.7,
    onePt: 0.9,
    name: "Johnny Johnson"
  };

  if (bballPt == 3){
    if (madeit > p2.threePt){       //Missed the basket
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
    var p1GoesFor = getRandomInt(4); //Randomly decides if p1 goes for a 1, 2, or 3 pt

    p1RoundPts = p1Round(p1GoesFor); //Determines if p1 made it or not
    p1TotalPts += p1RoundPts;
    p1list.push(p1TotalPts);         //Adds round points to list of points
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

  makeTr = document.createElement("tr");       //1st row of table

  makeTd = document.createElement("td");       //column header for the rounds (1, 2, 3, ... 10, ... 9001)
  makeTr.appendChild(makeTd);                     //Attach this to 1st row
  innerTd = document.createTextNode("Round");     //Call it round
  makeTd.appendChild(innerTd);                    //Attach the inside contents ("Round") to column 1

  makeTd = document.createElement("td");       //column header for p1
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p1.name);
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");       //column header for p2
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p2.name);
  makeTd.appendChild(innerTd);

  findId = document.getElementById("tbl");     //find the right table by ID
  findId.appendChild(makeTr);                  //Attach all of that stuff ^ to the table

  for(k = 0; k < rounds; k++){                 //make a row for each round
    var roundNum = k + 1;

    makeTr = document.createElement("tr");     //make a row

    makeTd = document.createElement("td");     //box 1 of row is for the round number
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(roundNum);
    makeTd.appendChild(innerTd);

    makeTd = document.createElement("td");     //box 2 of row is p1's points for that round
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(p1list[k]);
    makeTd.appendChild(innerTd);

    makeTd = document.createElement("td");     //box 3 of the row is p2's points for that round
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(p2list[k]);
    makeTd.appendChild(innerTd);

    findId = document.getElementById("tbl");   //identify the right table by ID

    findId.appendChild(makeTr);                //attach the row to the table
  }
}
/*
this function calls all of the functions

hopefully one day, I will be able to call
this function and generate a new table
with different values. but i am a potato
*/
function reload(){
  alert(p1.threePt);
  percents();
  p1();
  p2();
  makeTable();
}
reload();
