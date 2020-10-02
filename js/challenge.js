let timerController = setInterval(increaseCounter,1000);
let theCounter = document.getElementById("counter");
// Buttons
let pauseButt = document.getElementById("pause"); let minusButt = document.getElementById("minus"); let plusButt = document.getElementById("plus"); let heartButt = document.getElementById("heart");

// Adjusting The Counter
plusButt.addEventListener("click", increaseCounter);
minusButt.addEventListener("click", decreaseCounter);
pauseButt.addEventListener("click", stopTime);
heartButt.addEventListener("click", heartReact);
function increaseCounter() {let i = parseInt(theCounter.innerText, 10); i++; theCounter.innerText = i;}
function decreaseCounter() {let i = parseInt(theCounter.innerText, 10); i--; theCounter.innerText = i;}

function stopTime() { if(pauseButt.innerText == "pause") {clearInterval(timerController); pauseButt.innerText = "resume"; minusButt.disabled = true; plusButt.disabled = true; heartButt.disabled = true;} else {timerController = setInterval(increaseCounter,1000); pauseButt.innerText = "pause"; minusButt.disabled = false; plusButt.disabled = false; heartButt.disabled = false;}}

function heartReact () {

  if (oldLike = document.querySelector("li#num-"+theCounter.innerText+" span"))
  {
    upLike = parseInt(oldLike.innerText.split("")[0], 10); 
    upLike++; oldLike.innerHTML = upLike+" times";
  }
  else
  {
  let likesList = document.querySelector("ul"); let theLike = document.createElement('li'); let likeNumber = "<span>1 time</span>";
  theLike.innerHTML = theCounter.innerText+" has been liked "+likeNumber
  theLike.id = "num-"+theCounter.innerText;
  likesList.appendChild(theLike);
  }
}

// The Form
let theForm = document.getElementById("comment-form");
theForm.addEventListener('submit', (event) => {
    let theComment = document.getElementById("comment-input");
    let theList = document.getElementById("list");
    let theItem = document.createElement('p');
    theItem.innerHTML = theComment.value;
    theList.appendChild(theItem);
    theComment.value = "";
    event.preventDefault();
});