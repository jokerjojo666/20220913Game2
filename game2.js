let createdTime;
let clickedTime;
let reactionTime;

function getRandomColor() {
    let max = 200;
    let min = 50;
    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    let color = "rgba(255," + green + ",100,1.0)";
    return color;
}

function makeBox() {
    let time = Math.random;
    time = time * 2000;
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            document.querySelector("#box").style.borderRadius = "50%";
        } else {
            document.querySelector("#box").style.borderRadius = "0";
        }

        let min = 0;
        let max = window.innerHeight - 280;
        let top = Math.floor(Math.random() * (max - min + 1)) + min;

        min = 0;
        max = window.innerWidth - 140;
        let left = Math.floor(Math.random() * (max - min + 1)) + min;

        max = window.innerWidth - 140;
        let dynamicBound;
        if (window.innerWidth > window.innerHeight) {
            dynamicBound = window.innerWidth / 8;
            // console.log("Width:" + dynamicBound);
        } else {
            dynamicBound = window.innerHeight / 8;
            //console.log("Height:" + dynamicBound);
        }
        dynamicBound = dynamicBound + "px";
        document.documentElement.style.setProperty("--bound", dynamicBound);


        document.querySelector("#box").style.top = top + "px";
        document.querySelector("#box").style.left = left + "px";

        document.querySelector("#box").style.backgroundColor = getRandomColor();
        document.querySelector("#box").style.display = "block";
        createdTime = Date.now();
    }, time);
}


document.querySelector("#box").onclick = function () {
    this.style.display = "none";
    makeBox();
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    document.getElementById('time').innerHTML = reactionTime;
};
makeBox();
































// document.getElementById('box').onclick=function(){
//     this.style.display="none";
//     makeBox();
// }
// makeBox();

// let createdTime

/** 以下均為讓方塊消失的JS寫法

// document.querySelector("#box").onclick=function(){
//     this.style.display="none";
// }

// let box=document.querySelector("#box");
// box.onclick=()=>{
//     box.style.display="none"
// ;}

// box.addEventListener("click",()=>{
//     box.style.display="none";
// })

*/

// document.getElementById('box').onclick = function () {
//     this.style.display = "none";
// }

// function makeBox() {
//     let time = Math.random();
//     time = time * 2000;
//     setTimeout(function () {
//         document.getElementById('box').style.display = "block";
//     }, time);
// }