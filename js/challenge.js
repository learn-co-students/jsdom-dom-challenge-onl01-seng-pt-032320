document.addEventListener("DOMContentLoaded", () => {
    
    let timer = setInterval(function(){ counter.innerText = parseInt(counter.innerText) + 1}, 1000);    
    let likeCounter = {};
    //Submitting comments
    document.addEventListener("submit", (e) => {
        e.preventDefault();
        if (commentInput.value != ""){
            createComment();
            e.target.reset();
        } else{ console.log("Null comments not allowed."); }
    });
    //Clicking one of the buttons
    document.addEventListener("click", (e) => {
        if (e.target === pause){
            if (e.target.innerText === "resume"){
            //pausing
            console.log("Unpausing...");
            plusButton.disabled=false;
            minusButton.disabled=false;
            likeButton.disabled=false;

            timer = setInterval(function(){counter.innerText = parseInt(counter.innerText) + 1}, 1000);
            e.target.innerText = "pause";

            } else if(e.target.innerText === "pause"){
            //unpausing
            console.log("Pausing...");
            plusButton.disabled=true;
            minusButton.disabled=true;
            likeButton.disabled=true;

            clearInterval(timer);
            e.target.innerText = "resume";

            }
        } else if(e.target === heart){
            console.log("Like button");
            let number = counter.innerText;
            if(likeCounter[number]){ //liked 1+
                let node = document.getElementById(`number ${number}`);
                likeCounter[number]++;
                node.textContent = `${number} was liked ${likeCounter[number]} times`;
            }else{ //new like
                likeCounter[number]=1;
                let node = document.createElement("p");
                let textNode = document.createTextNode(`${number} was liked 1 time`);
                node.id = `number ${number}`;
                node.appendChild(textNode);
                likeContainer.appendChild(node);
            }

        } else if(e.target === plus){
            console.log("Add time");
            counter.innerText = parseInt(counter.innerText) + 1;

        } else if(e.target === minus){
            console.log("Remove time");
            counter.innerText = parseInt(counter.innerText) - 1;

            
        }
    });


});


const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const pauseResumeButton = document.getElementById("pause"); //when text is "pause" minus, plus, heart are disabled

const likeContainer = document.querySelector("ul.likes");
const commentsContainer = document.getElementById("list");
const commentInput = document.getElementById("comment-input");

function createComment(){
    let node = document.createElement("li");
    let textNode = document.createTextNode(commentInput.value);

    node.appendChild(textNode);

    commentsContainer.appendChild(node);
}
