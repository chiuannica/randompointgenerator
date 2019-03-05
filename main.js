var bballPt;
var roundPts = 0;
var p1TotalPts = 0, p2TotalPts = 0;
var p1, p2;
var i;

//
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bballPt = getRandomInt(4);

function p1Round(bballPt){
  var madeit = Math.random();
  p1 = {
    threePt: 0.4,
    twoPt: 0.5,
    onePt: 0.8,
    name: "Player1"
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
}
function p2Round(bballPt){
  var madeit = Math.random();

  p2 = {
    threePt: 0.3,
    twoPt: 0.7,
    onePt: 0.9,
    name: "PLayer2"
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
  print("Player 1's points: ");
  for(i = 0; i < 8; i++){
    var p1RoundPts;
    var p1GoesFor = getRandomInt(4);

    p1RoundPts = p1Round(p1GoesFor);
    p1TotalPts += p1RoundPts;
    print(p1TotalPts);
  }
}
function p2(){
  print("Player 2's points: ");
  for(i = 0; i < 8; i++){
    var p2RoundPts;
    var p2GoesFor = getRandomInt(4);

    p2RoundPts = p2Round(p2GoesFor);
    p2TotalPts += p2RoundPts;
    print(p2TotalPts);
  }
}

p1();
p2();