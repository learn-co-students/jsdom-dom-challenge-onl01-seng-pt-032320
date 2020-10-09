document.addEventListener("DOMContentLoaded", () => {
    let counter = document.querySelector("h1#counter")
   
    let myVar = setInterval(myTimer, 1000);

    function myTimer() {
        console.log(counter.innerHTML)
        let a = parseInt(counter.innerHTML)
        a+=1
        counter.innerHTML = a;
    }


const plusButton = document.getElementById("plus")
plusButton.addEventListener('click', (event) => {
        let b = parseInt(counter.innerHTML)
        b+=1
        counter.innerHTML = b;
        console.log(counter.innerHTML);
})


const minusButton = document.getElementById("minus")
minusButton.addEventListener('click', (event) => {
        let c = parseInt(counter.innerHTML)
        c-=1
        counter.innerHTML = c;
        console.log(counter.innerHTML);
})

const likes = document.querySelector("ul.likes")

const likeButton = document.getElementById("heart")
let numberLikes = {}
likeButton.addEventListener('click', (event) => {
    let value = parseInt(counter.innerHTML)
   
    let existingLi = likes.children.namedItem(value)

    if (numberLikes[value]) {
         numberLikes[value]+=1 
    }else{
        numberLikes[value] = 1
    }

    if (existingLi) {
       existingLi.innerText = `Counter ${value} has ${numberLikes[value]} likes`
    }else {
        const newLi = document.createElement("li")
        newLi.id = value 
        newLi.innerText = `Counter ${value} has ${numberLikes[value]} likes`
        likes.appendChild(newLi)
    }
  
})

const pauseButton = document.getElementById("pause")
let text = pauseButton.innerText
pauseButton.addEventListener('click', (event) => {
    if (text === 'pause'){
        clearInterval(myVar);
        plusButton.disabled = true 
        minusButton.disabled = true 
        likeButton.disabled = true 
        text = pauseButton.innerText = 'resume'
    }
    else if(text === 'resume') {
        myVar = setInterval(myTimer, 1000);
        plusButton.disabled = false 
        minusButton.disabled = false
        likeButton.disabled = false
        text = pauseButton.innerText = 'pause'

    }
})

const formElement = document.getElementById("comment-form")
console.log(formElement);
const comments = document.getElementById("list")
console.log(comments);
formElement.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputElement =  event.target.querySelector("#comment-input")
    const userInput = inputElement.value
    const pTag = document.createElement("p")
    pTag.innerText = userInput
    comments.appendChild(pTag)
})
       
})