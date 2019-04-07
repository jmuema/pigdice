//business logic
var rolling = function () {
  return Math.floor(Math.random() * 6) + 1;
}

function player(roll, tempscore, totalscore, playername){
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.playername;
}
player.prototype.onedie = function() {
  if (this.roll == 1){
    this.tempscore = 0;
    alert("1 is not in your favour" + this.playername + ", your turn is over!");
  } else {
    this.tempscore += this.roll;
  }
}
player.prototype.hold = function() {
  this.totalscore+= this.tempscore;
  this.tempscore = 0;
  alert(this.playername + ", your held your score, your turn is over."); 
}
player.prototype.proGamer = function() {
  if(this.totalscore == 100) {
    alert(this.playername + ", you are Master Dicer!!");
  }
}
player.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playername = ('');
}


