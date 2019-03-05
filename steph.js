
var bballPt;
var roundPts = 0;
var totalPts = 0;
var p1, p2;
var i;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bballPt = getRandomInt(4);

function p1round(bballPt){
  var madeit = Math.random();
  p1 = {
    threePt: 0.4,
    twoPt: 0.5,
    onePt: 0.8,
    name: "Player1"
  };

  if (bballPt == 3){
    if (madeit > p1.threePt){ //Missed the basket
      totalPts = totalPts;
    }else if(madeit <= p1.threePt){ //Made it
      roundPts = 3;
      totalPts = totalPts + roundPts;
    }
  }else if (bballPt == 2){
    if (madeit > p1.twoPt){
      totalPts = totalPts;
    }else if(madeit <= p1.twoPt){
      roundPts = 2;
      totalPts = totalPts + roundPts;
    }
  }else if (bballPt == 1){
    if (madeit > p1.onePt){
      totalPts = totalPts;
    }else if(madeit <= p1.onePt){
      roundPts = 1;
      totalPts = totalPts + roundPts;
    }
  }else{
    madeit = 0;
    totalPts = totalPts;
  }
};
function p2round(bballPt){
  var roundPts = 0;
  var totalPts = 0;
  var madeit = Math.random();
  var p2;

  p2 = {
    threePt: 0.3,
    twoPt: 0.7,
    onePt: 0.9,
    name: "PLayer2"
  };

  if (bballPt == 3){
    if (madeit > p2.threePt){ //Missed the basket
      totalPts = totalPts;
    }else if(madeit <= p2.threePt){ //Made it
      roundPts = 3;
      totalPts = totalPts + roundPts;
    }
  }else if (bballPt == 2){
    if (madeit > p2.twoPt){
      totalPts = totalPts;
    }else if(madeit <= p2.twoPt){
      roundPts = 2;
      totalPts = totalPts + roundPts;
    }
  }else if (bballPt == 1){
    if (madeit > p2.onePt){
      totalPts = totalPts;
    }else if(madeit <= p2.onePt){
      roundPts = 1;
      totalPts = totalPts + roundPts;
    }
  }else{
    madeit = 0;
    totalPts = totalPts;
  }
};

for(i = 0; i < 10; i++){
    var p1goesfor = getRandomInt(4);
    var p2goesfor = getRandomInt(4);
    p1round(p1goesfor);
    p2round(p2goesfor);
}

}
