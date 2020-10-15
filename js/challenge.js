
let counter = document.getElementById('counter')
let likeCount = {} // {'2': 1 } the number two has been liked once...update numbers in object
let likeList = document.getElementsByClassName('likes')[0]
let commentList = document.getElementById('list')


document.addEventListener("DOMContentLoaded", () => {

    //get counter, increment every second
    let timer = setInterval(function() {
        incrementCounter(1)
        //counter.innerText = parseInt(counter.textContent) + 1}, 1000);
    }, 1000)

    //click listeners for minus, plus, heart, pause

    document.addEventListener('click', event => {
        if(event.target.id === 'minus'){ //can also target by event.target.className
             incrementCounter(-1)
        }
        if(event.target.id === 'plus'){
            incrementCounter(1)
        }
        if(event.target.id === 'heart'){
            let number = counter.textContent
            // number has been liked
                if(likeCount[number]){
                    likeCount[number]++
                    let li = document.querySelector(`[data-id="${number}"]`)
                    li.textContent = `${number} has been liked ${likeCount[number]} times!`

                } else {
                    likeCount[number] = 1
                    let li = document.createElement('li')
                    li.dataset.id = number //id can be named anything
                    li.textContent = `${number} has been liked`
                    likeList.append(li)
                }
        }
        else if (event.target.id === 'pause'){
            clearInterval(timer)

            document.getElementById('minus').disabled = true 
            document.getElementById('plus').disabled = true 
            document.getElementById('heart').disabled = true 
            document.getElementById('submit').disabled = true 

            event.target.textContent = 'resume'
            event.target.id = 'resume'
        } else if (event.target.id === 'resume'){
            timer = setInterval(function(){
                incrementCounter(1)
            }, 1000)

            document.getElementById('minus').disabled = false 
            document.getElementById('plus').disabled = false 
            document.getElementById('heart').disabled = false 
            document.getElementById('submit').disabled = false 

            event.target.textContent = 'pause'
            event.target.id = 'pause'
        }
    })
});

//APPEND COMMENT SECTION

    document.addEventListener('submit', (event) => {
        event.preventDefault() 
        let comment = event.target.comment.value 
        let p = document.createElement('p')
        p.textContent = comment
        list.appendChild(p)
        event.target.reset()
    });

//functions

function incrementCounter(number){
    counter.innerText = parseInt(counter.textContent) + number
}