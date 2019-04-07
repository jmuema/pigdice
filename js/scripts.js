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


//user-interface logic
$(document).ready(function() {
  $("form#players").submit(function(event){
    event.preventDefault();
    p1 = new player();
    p2 = new player();
    var player1 = $("imput#player1name").val();
    var player2 = $("input#player2name").val();
    $("#players").hide();
    $("#.gaming").show();
    $("#p1").text(player1);
    $("#p2").text(player2);
    p1.playername = player1;
    p2.playername = player2;
  });
  $("#newgame").click(function() {
    p1.newGame();
    p2.newGame();
    $("#players").show();
    $(".gmaing").hide();
    $("input#player1name").val("");
    $("input#player2name").val("");

  });
  $("#p1-roll").click(function() {
    p1.roll == rolling();
    if (p1.roll == 1) {
      $("#onedice").show();
      $("#twodice").hide();
      $("#threedice").hide();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
    }else if (p1.roll == 2) {
      $("#twodice").show();
      $("#threedice").hide();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#onedice").hide();
    } else if (p1.roll == 3) {
      $("#threedice").show();
      $("#fourdice").hide();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
    }else if (p1.roll == 4) {
      $("#fourdice").show();
      $("#fivedice").hide();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
    } else if (p1.roll == 5) {
      $("#fivedice").show();
      $("#sixdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
      $("#fourdice").hide();
    } else {
      $("#sixdice").show();
      $("#fivedice").hide();
      $("#fourdice").hide();
      $("#twodice").hide();
      $("#onedice").hide();
      $("#threedice").hide();
    }
  })
})