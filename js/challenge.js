let interval = 0;
let paused = true;

let timer = function (){
return setInterval(function () {
  interval++;
  document.getElementById("counter").innerHTML = interval;
}, 1000);
}
let startTimer = timer();


let addOne = document.getElementById("plus");
let minusOne = document.getElementById("minus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let list = document.querySelector(".likes");
let commentForm = document.getElementById("comment-form");

document.addEventListener("DOMContentLoaded", () => {
  startTimer;

  addOne.addEventListener("click", function () {
    document.getElementById("counter").innerHTML = interval++;
  });

  minusOne.addEventListener("click", function () {
    document.getElementById("counter").innerHTML = interval--;
  });

  heart.addEventListener("click", function (e) {
    let newHeart = addHeart();
    newHeart();
  });

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addComment();
  });
});

function addHeart(){
  let counter = document.getElementById("counter").innerHTML;
  let times = 0
  return function(){
    let addLike = document.createElement("li");
    addLike.appendChild(document.createTextNode(`${counter} has been liked ${times} times`));
    list.appendChild(addLike);
  }
}

// function addHeart() {
//   let counter = document.getElementById("counter").innerHTML;
//   let addLike = document.createElement("li");
//   addLike.appendChild(document.createTextNode(`${counter} has been liked`));
//   list.appendChild(addLike);
// }

function addComment() {
  let comments = document.querySelector(".comments");
  let newComment = document.createElement("p");
  newComment.appendChild(
    document.createTextNode(`${commentForm.children[0].value}`)
  );
  comments.appendChild(newComment);
  commentForm.children[0].value = "";
}

pause.addEventListener("click", function () {
  
  paused 

  if (paused === true) {
    paused = false;
    clearInterval(startTimer);
    this.innerText = "resume";
  } else if (paused === false) {
    paused = true;
    startTimer = timer();
    this.innerText = "pause";
  }

  let arr = Array.from(document.getElementsByTagName("button"));
  arr.forEach(disableButtons);

  function disableButtons(button) {
    button.id !== "pause" && (button.disabled = !paused);
  }

});
