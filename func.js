let homeScore = document.getElementById("homeScore");
let awayScore = document.getElementById("awayScore");
let scoreHome = 0;
let scoreAway = 0;

function addH1(){
    scoreHome += 1;
    homeScore.textContent = scoreHome;
};

function addH2(){
    scoreHome += 2;
    homeScore.textContent = scoreHome;
};

function addH3(){
    scoreHome += 3;
    homeScore.textContent = scoreHome;
};

function addA1(){
    scoreAway += 1;
    awayScore.textContent = scoreAway;
};

function addA2(){
    scoreAway += 2;
    awayScore.textContent = scoreAway;
};

function addA3(){
    scoreAway += 3;
    awayScore.textContent = scoreAway;
};

function reset(){
    homeScore.textContent = 0;
    awayScore.textContent = 0;
    scoreAway = 0;
    scoreHome = 0;
};