document.addEventListener("DOMContentLoaded", () => {
    //Submitting comments
    document.addEventListener("submit", (e) => {
        e.preventDefault();
        if (commentInput.value != ""){
            createComment();
            e.target.reset();
        } else{ console.log("Null comments not allowed."); }
    });


});


const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const resumeButton = document.getElementById("resume");

const likeContainer = document.querySelector("ul.likes");
const commentsContainer = document.getElementById("list");
const commentInput = document.getElementById("comment-input");

function createComment(){
    let node = document.createElement("p");
    let textNode = document.createTextNode(commentInput.value);

    node.appendChild(textNode);

    commentsContainer.appendChild(node);
}