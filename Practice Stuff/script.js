var count = 15
var countElement = document.querySelector("#count")

function add1(){
    count ++;
    countElement.innerText = "The count is " + count;
    console.log(count)
}

function sub1(){
    count --;
    countElement.innerText = "The count is " + count;
    console.log(count)
}