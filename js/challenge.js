document.addEventListener("DOMContentLoaded", () =>{

    const numberCounter = document.getElementById("counter")
    let newCounter = 0
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    let pause = document.getElementById("pause")
    


    form.addEventListener("submit", function(event) { // addEventListener for the submit button on comments
        event.preventDefault() // preventDefault()
        let comment = document.getElementById("comment-input").value  // grab the value within comment-input id
        let list = document.getElementById("list") 
        let paragraph = document.createElement("p") // create "p" element
        paragraph.innerText = comment // push the comment within the p tag
        list.appendChild(paragraph) // add a child node with an argument of p tag
        
    });


    minusCounter.addEventListener('click', (event) => {
        const buttons = event.target.dataset.buttons
           if (buttons === "minus") {
            alert("hi")
           }
       });

      
       function increaseCounter() {
        newCounter++ 
        counter.innerText = newCounter 
       }
    
    function decreaseCounter() {
        newCounter-- 
        counter.innerText = newCounter
    }



   

    function like() {
        likes.innerHTML += `<li>Number ${newCounter} has been liked!</li>` 
    }

    function toggleButton(e) {
        if (e.target.id === "pause") { 
            e.target.id = "resume" 
            e.target.innerText = "resume" // change the innerText of it to "resume"
            clearInterval(myCounter) // cancel the repeating action of the interval
            minus.disabled = true 
            plus.disabled = true // disables the plus button
        } else { 
            e.target.id = "pause" 
            e.target.innerText = "pause" // change the innerText of it back to "pause"
            myCounter = window.setInterval(increaseCounter, 1000) // increase the counter
            minus.disabled = false 
            plus.disabled = false // keeps the plus/minus button enabled
        }
    }

// add eventListeners 

    minus.addEventListener("click", decreaseCounter) 
    plus.addEventListener("click", increaseCounter)
    heart.addEventListener("click", like)
    pause.addEventListener("click", toggleButton)


});

