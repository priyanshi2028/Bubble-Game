//timer chaltae h
var time = 60;
var score = 0;
var hitValue = 0;
var int ;
function timer() {
  int =  setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timVal").innerHTML = time;
    } else {
        clearInterval(int);
        document.querySelector("#timVal").innerHTML = '-';
        time = 60
        gameOver();

    }
  }, 1000);
}
function hit() {
    hitValue = Math.floor(Math.random() * 10);
  document.getElementById("hitVal").innerHTML = hitValue;
}

//board bnane k lie function
function makeClutter() {
  var clutter = `   <div id="bubble">5</div>`;
  for (let i = 0; i < 179; i++) {
    clutter += `   <div id="bubble">
    ${Math.floor(Math.random() * 10)}
</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function IncreaseScore() {
    score += 10;
    document.querySelector("#scoreVal").innerHTML = score;

}
function gameOver(){
    document.querySelector("#pbtm").innerHTML = `<div class='gameOver'>Game Over :(\
       <br> Score : ${score}</div>
    `;
    document.querySelector("#timVal").innerHTML = '-';
  
    clearInterval(int);


}



makeClutter();
timer();
hit();


var targetVal = document.getElementById('pbtm').addEventListener("click" , function(details){
    var n = Number(details.target.textContent)
    if( n === hitValue){
        IncreaseScore();
        hit();
        makeClutter()
    }else{
        gameOver()
    }
})
