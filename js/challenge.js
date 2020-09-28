document.addEventListener("DOMContentLoaded", () => {
    let counter = document.querySelector("h1#counter")
   
    // let myVar = setInterval(myTimer, 1000);

    // function myTimer() {
    //     console.log(counter.innerHTML)
    //     let a = parseInt(counter.innerHTML)
    //     a+=1
    //     counter.innerHTML = a;
    // }


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
       
})