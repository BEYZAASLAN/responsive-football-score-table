const homeScore = document.querySelector(".homeScore")
const guestScore = document.querySelector(".guestScore")
const btnn = document.querySelectorAll(".btnwrap");
const game = document.querySelector(".newgame")
const diff = document.querySelector(".diff");
function changeTeamName() {
  var newName = prompt("Yeni takım adını giriniz:");
  if (newName !== null && newName.trim() !== "") {
      document.getElementById("teamName").textContent = newName;
  } else {
      alert("Lütfen geçerli bir takım adı giriniz!");
  }
}
function changeTeamName1() {
  var newName1 = prompt("Yeni takım adını giriniz:");
  if (newName1 !== null && newName1.trim() !== "") {
      document.getElementById("teamName1").textContent = newName1;
  } else {
      alert("Lütfen geçerli bir takım adı giriniz!");
  }
}
btnn.forEach(element => {
    element.addEventListener("click",e=>{
        e.preventDefault()
let btn = e.target
let changeScore = btn.parentElement.previousElementSibling;
console.log(btn.parentElement.previousElementSibling)
if (btn.className === "one") {
  console.log("a");
    changeScore.textContent =  Number(changeScore.textContent) + 1
    changeColor()
}
else if (btn.className === "reduce") {
  console.log("a");
    changeScore.textContent =  Number(changeScore.textContent) - 1
    changeColor()
}
else if (btn.className === "setScore") {
  console.log("a");
  const inputScore = prompt("yeni skoru giriniz:");
  const newScore = parseInt(inputScore);
  if (!isNaN(newScore)) {
      changeScore.textContent = newScore;
    } else {
      alert("lütfen geçerli bir sayı giriniz!");
  }
    changeColor();
}
    })
});
const changeColor = ()=>{
if (homeScore.textContent === guestScore.textContent) {
  homeScore.style.color = "yellow";
    guestScore.style.color = "yellow";
    diff.textContent = 'BAŞA BAŞ GİDİYOR';
} else if (Number(homeScore.textContent) > Number(guestScore.textContent)) {
  homeScore.style.color = "green";
  guestScore.style.color ="red"
  if (Number(homeScore.textContent) - Number(guestScore.textContent) === 1) {
  diff.textContent = `A TAKIMI ${
    Number(homeScore.textContent) - Number(guestScore.textContent)
  }  PUANLA ÖNDE `;
  }else{
diff.textContent = `A TAKIMI ${
  Number(homeScore.textContent) - Number(guestScore.textContent)
} PUANLA ÖNDE `;
  }
} else if (Number(guestScore.textContent) > Number(homeScore.textContent)) {
  homeScore.style.color = "red";
  guestScore.style.color = "green";

   if ( Number(guestScore.textContent ) - Number(homeScore.textContent) === 1) {
     diff.textContent = `B TAKIMI   ${
       Number(guestScore.textContent) - Number(homeScore.textContent)
     } PUANLA ÖNDE `;
   } else {
     diff.textContent = `B TAKIMI ${
       Number(guestScore.textContent) - Number(homeScore.textContent)
     } PUANLA ÖNDE`;
   }
}
}
const newGame = ()=>{
    homeScore.textContent = 0
    guestScore.textContent = 0
     diff.textContent = "";
    homeScore.style.color = "white";
    guestScore.style.color = "white";
}
game.addEventListener("click",newGame)
