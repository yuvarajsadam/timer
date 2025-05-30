const a = document.getElementById("tt");

const b = document.getElementById("tt1");
let t = 0;

function t1() {
    if (parseInt(a.innerHTML) < 9) {
        a.innerHTML = `0${parseInt(a.innerHTML)+1}`

    } else if (parseInt(a.innerHTML) >= 59) {
        b.innerHTML = `0${parseInt(b.innerHTML)+1}`;
        a.innerHTML = "00";

    } else {
        a.innerHTML = `${parseInt(a.innerHTML)+1}`
    }
}

function v() {

    t = setInterval(t1, 1000)

}

function s() {
    clearInterval(t)
}



function y() {
    clearInterval(t)
    b.innerHTML = "00"
    a.innerHTML = "00"

}