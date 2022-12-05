var count = 5;
var redirect = "../index.html";

function countDown() {
    if (count >= 0) {
        document.getElementById("timer").innerHTML = count--;
        setTimeout("countDown()", 1000);
    } else {
        window.location.href = redirect;
    }
}
countDown();