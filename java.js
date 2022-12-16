const btn = document.querySelector("#btn");
const text = document.getElementById("UserName");
const Generate = document.querySelector("#Generate");
let div = document.querySelector(".div");
let div1 = document.querySelector(".div1");
let Circle = document.querySelector("#Circle");
let Circle1 = document.querySelector("#Circle1");
let Score = document.querySelector("#Score");
let Score1 = document.querySelector("#Score1");

let P_Name = document.querySelector("#Name");

btn.onclick = () => {
  div1.style.display = "flex";
  div.style.display = "none";
  P_Name.innerHTML = text.value;
};
let p1 = 0;
let p2 = 0;
let count = 0;
let array = [2, 3, 4, 6, 7, 8, 9, 10, 11];
Generate.onclick = () => {
  let player1 = array[Math.round(Math.random() * 8)];
  let player2 = array[Math.round(Math.random() * 8)];
  document.getElementById("cards").src = "IMG/" + player1 + ".png";
  document.getElementById("cards1").src = "IMG/" + player2 + ".png";
  p1 += player1;
  p2 += player2;
  count++;
  Score.innerHTML = p1;
  Score1.innerHTML = p2;

  if (count == 3) {
    if (p1 > p2) {alert(text.value + " won");
    div1.style.display = "none";}
    else if (p1 < p2) {
    alert("Computer won");
    div1.style.display = "none";
  }
}
res.onclick = () => {
  p1=0;
  p2=0;
  count=0;
  document.getElementById("cards").src = "https://w7.pngwing.com/pngs/1018/300/png-transparent-playing-card-standard-52-card-deck-card-game-poker-others.png";
  document.getElementById("cards1").src = "https://w7.pngwing.com/pngs/1018/300/png-transparent-playing-card-standard-52-card-deck-card-game-poker-others.png";
  Score1.innerHTML=p2;
  Score.innerHTML=p2;
  div1.style.display = "flex";
};
};
