const btn = document.querySelector(".submit button");
const val = document.querySelectorAll(".rating .circle");
const fdbk = document.getElementById("result");

const newPage = document.getElementById("aftersub");
const ratingPage = document.getElementById("mainpage");

let previous;

for (let i=0; i<val.length; i++) {
    val[i].addEventListener("click",prepareVal);
}

function prepareVal(evt) {
    if (previous>=0) {
        val[previous].style.backgroundColor = "hsl(216, 12%, 54%, 10%)";
        val[previous].style.color = "hsl(217, 12%, 63%)";
    }
    evt.target.style.backgroundColor = "gray";
    evt.target.style.color = "white";
    fdbk.textContent = evt.target.textContent + " ";
    previous = Number(evt.target.textContent)-1;
}

function submit() {
    if (fdbk.textContent === "") {
        alert("Rating empty, please rate your current experience!");
    } else {
        ratingPage.style.display = "none";
        newPage.style.display = "flex";
    }
}

btn.addEventListener("click", submit);
