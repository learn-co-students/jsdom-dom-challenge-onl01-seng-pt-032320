document.addEventListener("DOMContentLoaded", function() {
    // Declare variables
    let counter = 0;
    let timer;
    const countDisplay = document.getElementById('counter');
    const minusBtn = document.getElementById('minus');
    const plusBtn = document.getElementById('plus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const submitBtn = document.getElementById('submit');
    const likeDisplay = document.querySelector(".likes");
    
    // Functions
    function startTimer() {
        timer = setInterval(increaseCounter, 1000);
    }

    function displayCounter(num) {
        countDisplay.innerText = num;
    }

    function increaseCounter() {
        counter++;
        displayCounter(counter);
    }

    function decreaseCounter() {
        counter--;
        displayCounter(counter);
    }

    function setDisabledElement(element, b) {
        element.disabled = b;
    }

    function paused() {
        clearInterval(timer);
        setDisabledElement(minusBtn, true);
        setDisabledElement(plusBtn, true);
        setDisabledElement(heartBtn, true);
        setDisabledElement(submitBtn, true);
        pauseBtn.innerText = "resume";
    }

    function resume() {
        startTimer();
        setDisabledElement(minusBtn, false);
        setDisabledElement(plusBtn, false);
        setDisabledElement(heartBtn, false);
        setDisabledElement(submitBtn, false);
        pauseBtn.innerText = "pause";
    }

    function checkForLike() {

    }

    // Event Listeners
    minusBtn.addEventListener("click", function() {
        decreaseCounter();
    });

    plusBtn.addEventListener("click", function() {
        increaseCounter();
    });

    heartBtn.addEventListener("click", function() {
        const likedNum = counter;
        const likesArray = document.querySelectorAll(".likes li");
        let likeMsg;

        if (likesArray.length != 0){
            for (let i = 0; i < likesArray.length; i++) {
                const messageArray = likesArray[i].innerText.split(' ');
                if (parseInt(messageArray[0]) == likedNum) {
                    let likedCount = parseInt(messageArray[(messageArray.length - 2)]);
                    likeMsg = `${likedNum} has been liked ${likedCount + 1} times`;
                    likesArray[i].innerText = likeMsg;
                    for (let x = 0; x < likesArray.length; x++){
                        likeDisplay.append(likesArray[x]);
                    }
                    return;
                }
            }
        }
        const newLike = document.createElement("LI");
        likeMsg = `${likedNum} has been liked 1 time`;
        newLike.innerHTML = "<p>" + likeMsg + "</p>";
        likeDisplay.append(newLike); 
    });

    pauseBtn.addEventListener("click", function() {
        if (pauseBtn.innerText === "pause") {
            paused();
        } else {
            resume();
        }
    });

    document.getElementById('comment-form').addEventListener("submit", function(e) {
        e.preventDefault();

        const comment = document.forms['comment-form']['comment-input'].value;
        const commentDisplay = document.getElementById('list');
        const newComment = document.createElement("P");
        newComment.innerHTML = comment;
        commentDisplay.append(newComment);
        document.forms["comment-form"].reset();
    });

    // Start Counter on page load
    startTimer();   
});