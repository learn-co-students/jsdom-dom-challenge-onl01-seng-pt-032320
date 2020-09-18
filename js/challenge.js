let paused=false;
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const pause =  document.getElementById('pause');
const heart =  document.getElementById('heart');
const commentForm=document.getElementById("comment-form");
let resume=document.getElementById("resume");
let time = document.getElementById('counter');
let count = parseInt(time.innerHTML);
const likesUl = document.getElementsByClassName('likes')[0];

setInterval(function() {
  if(!paused) {
    time.innerHTML = count += 1
  } 
},1000);

heart.addEventListener("click", function(e){
    e.preventDefault();
    let lis = document.querySelector('.likes').children
    let array = Array.from(lis);
    // let numbersThatWereLiked = array.map(child => parseInt(child.innerText));
    if (array.map(child => parseInt(child.innerText)).includes(count)) {
        let child = document.querySelector('[id="num-'+count+'"]')  //grab the li that was already liked by using "num-${count}"
        n = parseInt(child.innerText.split(' ')[4]);
        child.innerHTML = `${count} has been liked <span> ${n + 1} </span> times`;
    } else {
      li = document.createElement('li')
      li.id=`num-${count}`
      li.innerHTML = `${count} has been liked <span>1</span> time`
      likesUl.appendChild(li)
    }      
  });
    

function toggleDisableButtons() {
  let buttons = document.querySelectorAll("button:not(#pause)");
  buttons.forEach(button => button.disabled=paused);
}

pause.addEventListener('click', function(e) {
  e.preventDefault();
  !paused?(paused=true,this.innerText="resume",toggleDisableButtons()):(paused=false,this.innerText="pause",toggleDisableButtons());
});


commentForm.addEventListener("submit", function(e){
  e.preventDefault();
  let comment=document.getElementById("comment-input").value;
  let comments = document.querySelector(".comments");
  let commentsDiv = document.createElement('div');
  commentsDiv.innerText = comment;
  comments.appendChild(commentsDiv); 
});

minus.addEventListener("click", function(e){
    e.preventDefault();
    let time = document.getElementById('counter');
    let count = parseInt(time.innerHTML)
    time.innerHTML = count -= 1 
  });

plus.addEventListener("click", function(e){
    e.preventDefault();
    let time = document.getElementById('counter');
    let count = parseInt(time.innerHTML)
    time.innerHTML = count += 1 
  });

  // lis.id.split('-')
  // (2) ["num", "2"]
  // int = list.id.split('-')
  // (2) ["num", "2"]
  // int[1]
  // "2"