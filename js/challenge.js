// let timeString = 
// let time = parseInt(timeString, )
// function time() {


// }
// let timeoutID = ()
// function delayedAlert() {
//     timeoutID = window.setTimeout(window.alert, 2*1000, 'That was really slow!');
//   }
  
//   function clearAlert() {
//     window.clearTimeout(timeoutID);
//   }

let seconds = 0;
let counterOn = false
const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.getElementById("likes");
const submit = document.getElementById("submit");

// initialize counter
const startCounter = () => {
  interval = setInterval(() => {increment()}, 1000)
  counterOn = true
  pause.innerHTML = 'stop'
}

document.addEventListener("DOMContentLoaded", startCounter())

// button click actions
document.addEventListener("click", (e) => {
  if (e.target === plus) {
    increment()
  } else if (e.target === minus) {
    decrement()
  } else if (e.target === heart) {
    like()
  } else if (e.target === pause && counterOn === true) {
    pauseCounter()
  } else if (e.target === pause && counterOn === false) {
    startCounter()
  }
})

// button functions
const increment = () => {
  seconds++
  counter.innerText = seconds
}

const decrement = () => {
  if (seconds > 0) {
    seconds -= 1
  } 
  counter.innerText = seconds
}

const like = () => {
  const newLike = document.createElement('li')
  likes.appendChild(newLike)
  newLike.innerText = `${counter.innerHTML} has been liked!`

  
}

const pauseCounter = () => {
  clearInterval(interval)
  counterOn = false
  pause.innerHTML = 'start'

}

// prevent form submission
document.addEventListener('click', (e) => {
  if (e.target === submit) {
    event.preventDefault()
    postComment()
  }
})


// Note: These deliverables are written in the form of User Stories. 
// They describe the features from the perspective of a user when they visit the page.

// As a user, I should see the timer increment every second 
// once the page has loaded.
// As a user, I can manually increment and decrement the 
// counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter.
//  I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter
//  and re-enable the buttons.

// As a user, I can leave comments on my gameplay, such as:
//  "Wow, what a fun game this is."
// Hint for the timer
// If you're not sure how to create or pause a timer, look 
// into: setTimeout setInterval clearinterval