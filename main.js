var bballPt;
var roundPts = 0;
var p1TotalPts = 0, p2TotalPts = 0;
var p1, p2;
var i, j;

var rounds = 10;


/*
Get user input for 3/2/1 pt rate i.e. 45% 3pt like Steph Curry
*/
function info(){
  per1 = document.getElementById('percent1').value;          //get user input
  per2 = document.getElementById('percent2').value;
  per3 = document.getElementById('percent3').value;
  per4 = document.getElementById('percent4').value;
  per5 = document.getElementById('percent5').value;
  per6 = document.getElementById('percent6').value;
  name1 = document.getElementById('name1').value;
  name2 = document.getElementById('name2').value;

  document.getElementById("value1").innerHTML = per1 + "%";  //show user input
  document.getElementById("value2").innerHTML = per2 + "%";
  document.getElementById("value3").innerHTML = per3 + "%";
  document.getElementById("value4").innerHTML = per4 + "%";
  document.getElementById("value5").innerHTML = per5 + "%";
  document.getElementById("value6").innerHTML = per6 + "%";
};


//Get a random number 0 and up to max (non-inclusive)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*
function for player 1 that randomly determines if
they made the shot and how many points they get for 1 round
*/
function p1Round(bballPt){
  var madeit = Math.random();
  /*
  Madeit is a random number 0 to 1. Math.random gets a random number,
  then it gets compared to the stats. If the random number is greater, then
  it made it. If it is less, then it was a miss.

  i.e. madeit = 0.45. bballPt = 3 (also randomly generated), so the player went for a 3pt shot.
  p1's 3pt stat is 0.4. That means p1 missed.
  */
  p1 = {               //p1's stats taken from user input
    threePt: per1/100,
    twoPt: per2/100,
    onePt: per3/100,
    name: name1
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
}

/*
function for player 2 that randomly determines if
they made the shot and how many points they get for 1 round.
*/
function p2Round(bballPt){
  var madeit = Math.random();
  /*
  same as p1Round()
  */
  p2 = {                            //p2's stats
    threePt: per4/100,
    twoPt: per5/100,
    onePt: per6/100,
    name: name2
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
  p1list = [];                       //p1list starts empty. p1list is the list of total points
  for(i = 0; i < rounds; i++){       //repeats round number of times
    var p1RoundPts;
    var p1GoesFor = getRandomInt(4); //Randomly decides if p1 goes for a 1, 2, 3 pt, or loses ball

    p1RoundPts = p1Round(p1GoesFor); //Determines points made for a round
    p1TotalPts += p1RoundPts;        //Adds points gained to total points
    p1list.push(p1TotalPts);         //Adds total points to list of total points
  }
}
function p2(){
  p2list = [];                       //p2list starts empty. p2list is the lost of total points
  for(i = 0; i < rounds; i++){       //Finds points for whatever number of rounds.
    var p2RoundPts;                  //Points for this round
    var p2GoesFor = getRandomInt(4); //Determines what p2 goes for (0 [lose ball], 1 , 2, 3)

    p2RoundPts = p2Round(p2GoesFor); //Determines if player made it based on stats
    p2TotalPts += p2RoundPts;        //Adds points gained to total points
    p2list.push(p2TotalPts);         //Adds total points to list of total points
  }
}
function makeTable() {
  var k;
  var makeTr, makeTd, innerTd;
  var findId;

  makeTr = document.createElement("tr");       //1st row of table

  makeTd = document.createElement("th");       //column header for the rounds (1, 2, 3, ... 10, ... 9001)
  makeTr.appendChild(makeTd);                     //Attach this to 1st row
  innerTd = document.createTextNode("Round");     //Call it round
  makeTd.appendChild(innerTd);                    //Attach the inside contents ("Round") to column 1

  makeTd = document.createElement("th");       //column header for p1
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p1.name);
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("th");       //column header for p2
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
//Call all of the functions
function callallfuncs(){
  info();
  p1();
  p2();
  makeTable();
}
callallfuncs();

function newstatsnewtable(){
  p1list = [];                       //p1list starts empty. p1list is the list of total points
/*
  for(i = 0; i < rounds; i++){       //repeats round number of times
    var p1RoundPts;
    var p1GoesFor = getRandomInt(4); //Randomly decides if p1 goes for a 1, 2, 3 pt, or loses ball
    p1RoundPts = p1Round(p1GoesFor); //Determines points made for a round
    p1TotalPts += p1RoundPts;        //Adds points gained to total points
    p1list.push(p1TotalPts);         //Adds total points to list of total points
  }
  */
  alert("done");
}
