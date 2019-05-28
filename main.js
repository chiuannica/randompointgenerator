var rounds = 10;

//This function makes everything load up on the page
callallfuncs();

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
  var roundPts = 0;                 //The total points gained for one round
  var madeit = Math.random();
  /*
  Madeit is a random number 0 to 1. Math.random gets a random number,
  then it gets compared to the stats. If the random number is greater, then
  it made it. If it is less, then it was a miss.

  i.e. madeit = 0.45. bballPt = 3 (also randomly generated), so the player went for a 3pt shot.
  p1's 3pt stat is 0.4. That means p1 missed.
  */
  p1 = {                            //p1's stats taken from user input
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
  var roundPts = 0;                 //The total points for this round
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

/*
This function makes a list of total points for each round using by generating
what shot the player goes for and using p1Round().
*/
function p1(){
  p1list = [];                       //p1list starts empty. p1list is the list of total points
  var p1TotalPts = 0                 //p1 starts with 0 points. this gets added on to.
  var i;
  for(i = 0; i < rounds; i++){       //repeats round number of times
    var p1RoundPts;
    var p1GoesFor = getRandomInt(4); //Randomly decides if p1 goes for a 1, 2, 3 pt, or loses ball

    p1RoundPts = p1Round(p1GoesFor); //Determines points made for a round
    p1TotalPts += p1RoundPts;        //Adds points gained to total points
    p1list.push(p1TotalPts);         //Adds total points to list of total points
  }
}
/*
Same as p1() for player 2.
*/
function p2(){
  p2list = [];                       //p2list starts empty. p2list is the lost of total points
  var p2TotalPts = 0;                //p2 starts with 0 points
  var i;
  for(i = 0; i < rounds; i++){       //Finds points for whatever number of rounds.
    var p2RoundPts;                  //Points for this round
    var p2GoesFor = getRandomInt(4); //Determines what p2 goes for (0 [lose ball], 1 , 2, 3)

    p2RoundPts = p2Round(p2GoesFor); //Determines if player made it based on stats
    p2TotalPts += p2RoundPts;        //Adds points gained to total points
    p2list.push(p2TotalPts);         //Adds total points to list of total points
  }
}
function makeTable() {
  var i;
  var makeTbl, makeTr, makeTd, innerTd;
  var findId;

  makeTbl = document.createElement("table");   //make the table to hold everything
  makeTbl.id = "results";                      //Table's id is result
  //HEADER ROW
  makeTr = document.createElement("tr");       //1st row of table

  makeTd = document.createElement("th");       //column header for the rounds (1, 2, 3, ... 10, ... 9001)
  makeTr.appendChild(makeTd);                     //Attach this to 1st row
  innerTd = document.createTextNode("Round");     //The header's text is round
  makeTd.appendChild(innerTd);                    //Attach the inside contents ("Round") to column 1

  makeTd = document.createElement("th");       //column header for p1
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p1.name);
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("th");       //column header for p2
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p2.name);
  makeTd.appendChild(innerTd);

  makeTbl.append(makeTr);                      //Attach header row to table
  findId = document.getElementById("tbls");    //Find the ID of the div, tbls, which holds all tables
  findId.appendChild(makeTbl);                 //Attach the table to the div tbls

  //EACH ROW which holds the numbers from the 2 lists of total points
  for(i = 0; i < rounds; i++){                 //make a row for each round
    var roundNum = i + 1;

    makeTr = document.createElement("tr");     //make a row

    makeTd = document.createElement("td");     //box 1 of row is for the round number
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(roundNum);
    makeTd.appendChild(innerTd);

    makeTd = document.createElement("td");     //box 2 of row is p1's points for that round
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(p1list[i]);
    makeTd.appendChild(innerTd);

    makeTd = document.createElement("td");     //box 3 of the row is p2's points for that round
    makeTr.appendChild(makeTd);
    innerTd = document.createTextNode(p2list[i]);
    makeTd.appendChild(innerTd);

    makeTbl.appendChild(makeTr);
    findId = document.getElementById("tbls"); //identify the right table by ID
    findId.appendChild(makeTbl);                //attach the row to the table
  };
}
function makeStatTbl(){
  var makeTbl, makeTr, makeTd, innerTd, findId;

  makeTbl = document.createElement("table");   //Create the table which holds everything
  makeTbl.id = "stat";                         //Table's id is stat
  //1ST ROW OF HEADERS
  makeTr = document.createElement("tr");

  makeTd = document.createElement("th");       //Create column header
  makeTr.appendChild(makeTd);                     //Attach the column header to the first row
  innerTd = document.createTextNode("Point Stat");//The column header is "Point Stat"
  makeTd.appendChild(innerTd);                    //Attach the inside contents to the column header

  makeTd = document.createElement("th");       //Column header for p1
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p1.name + " (%)");
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("th");       //Column header for p2
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(p2.name + " (%)");
  makeTd.appendChild(innerTd);

  makeTbl.appendChild(makeTr);                //Attach the row to the table

  //2nd row
  makeTr = document.createElement("tr");     //make a row

  makeTd = document.createElement("td");
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode("3");
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");     //3pt stat for p1
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(per1);
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");     //3pt stat for p2
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(per4);
  makeTd.appendChild(innerTd);

  makeTbl.appendChild(makeTr);                //Attach the row to the table

  //3rd row
  makeTr = document.createElement("tr");     //make a row

  makeTd = document.createElement("td");
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode("2");
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");     //2pt stat for p1
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(per2);
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");     //2pt stat for p2
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(per5);
  makeTd.appendChild(innerTd);

  makeTbl.appendChild(makeTr);                //Attach the row to the table

  //4th row
  makeTr = document.createElement("tr");     //make a row

  makeTd = document.createElement("td");
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode("1");
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");     //1pt stat for p1
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(per3);
  makeTd.appendChild(innerTd);

  makeTd = document.createElement("td");     //1pt stat for p2
  makeTr.appendChild(makeTd);
  innerTd = document.createTextNode(per6);
  makeTd.appendChild(innerTd);

  makeTbl.appendChild(makeTr);                //Attach the row to the table

  findId = document.getElementById("tbls");   //Find the tbls div
  findId.appendChild(makeTbl);                //Attach the table to the div
}


//Call all of the functions when page loads
function callallfuncs(){
  info();
  p1();
  p2();
  makeTable();
  makeStatTbl();
}

/*
This function is called by a button to take the user's input
and make a new table
*/
function newstatsnewtable(){
  /*
  For some reason, if I call p1() and p2(), they don't work.
  The code in the functions is copied in here. I will figure
  it out-- but hey, it works!)
  */
  p1list = [];                       //p1list starts empty. p1list is the list of total points
  p1TotalPts = 0                     //p1 starts with 0 points. this gets added on to.
  var i;
  for(i = 0; i < rounds; i++){       //repeats round number of times
    var p1RoundPts;
    var p1GoesFor = getRandomInt(4); //Randomly decides if p1 goes for a 1, 2, 3 pt, or loses ball

    p1RoundPts = p1Round(p1GoesFor); //Determines points made for a round
    p1TotalPts += p1RoundPts;        //Adds points gained to total points
    p1list.push(p1TotalPts);         //Adds total points to list of total points
  }
  p2list = [];                       //p2list starts empty. p2list is the lost of total points
  p2TotalPts = 0;                    //p2 starts with 0 points
  var i;
  for(i = 0; i < rounds; i++){       //Finds points for whatever number of rounds.
    var p2RoundPts;                  //Points for this round
    var p2GoesFor = getRandomInt(4); //Determines what p2 goes for (0 [lose ball], 1 , 2, 3)

    p2RoundPts = p2Round(p2GoesFor); //Determines if player made it based on stats
    p2TotalPts += p2RoundPts;        //Adds points gained to total points
    p2list.push(p2TotalPts);         //Adds total points to list of total points
  }
  makeTable();
  makeStatTbl();
}
