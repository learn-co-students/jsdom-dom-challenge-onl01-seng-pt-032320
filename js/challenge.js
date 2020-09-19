const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pauseBtn = document.querySelector('#pause')
const comment = document.querySelector('#comment')
let counter = document.querySelector('#counter')
const submit = document.getElementById('submit')
let time = 0
let myInterval = -1;

window.addEventListener('DOMContentLoaded', (e) => {
    
    pauseBtn.addEventListener('click', function(e){
        
        //if timer is paused
        if(myInterval === -1){
            myInterval = setInterval(function(){
                time ++;
                counter.innerHTML = time;
                }, 1000);
                pauseBtn.innerText = 'stop'
        }else{
        //else pause
            clearInterval(myInterval)
            myInterval = -1;
            pauseBtn.innerText = 'start'
            
        }
       
    })
    //------------------------------------------------
    

    minus.addEventListener('click',function(e){
        
        if(pauseBtn.innerText === 'start'){
            counter.innerText 
        }else{
            counter.innerHTML --;
        }

    })

    plus.addEventListener('click',function(e){
        if(pauseBtn.innerText === 'start'){
            counter.innerText 
        }else{
            counter.innerHTML ++;
        }
    })

   

    heart.addEventListener('click',function(e){
        if(pauseBtn.innerText === 'start'){
            counter.innerText 
        }else{
            alert(counter.innerText + ' Likes')
        }
        
        

    })

    const comment = document.getElementById('comment')
    const comments = document.getElementById('comment-form')
    
    comments.addEventListener('submit',function(event){
        event.preventDefault();
        const newComment = document.getElementById('comment-input').value;
        comment.innerHTML += `<li>${newComment}</li>`;
        comments.reset()
    })




});