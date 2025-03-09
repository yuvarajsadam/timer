const a = document.getElementById("t");

function s() {
    setInterval(function() {
        a.innerHTML -= 1
    }, 1000);
}

function s1() {
   a.textContent = "15:00"
}

function r() {
    a.textContent = "15:00"
}

function short() {
    a.textContent = "5:00";
}

function long() {
    a.textContent = "25:00";
}
