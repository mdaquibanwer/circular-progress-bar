let progressBar = document.querySelector(".progress-bar");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 100;
let speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.innerText = `${progressStartValue}%`;
    progressBar.style.background = `conic-gradient(#6517b3 ${3.6 * progressStartValue}deg,#ededed 0deg)`
    if(progressStartValue === progressEndValue){
        clearInterval(progress)
    }
}, speed);