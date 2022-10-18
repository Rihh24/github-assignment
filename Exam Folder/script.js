console.log('Script is Working!!')

var count = 3;
var countElement = document.querySelector("#pets-1");

function pets1(){
    count ++;
    countElement.innerText = count + " petting(s)";
}

var count2 = 5;
var countElement2 = document.querySelector("#pets-2");

function pets2(){
    count2 ++;
    countElement2.innerText = count2 + " petting(s)"
}

var count3 = 8;
var countElement3 = document.querySelector("#pets-3");

function pets3(){
    count3 ++;
    countElement3.innerText = count3 + " petting(s)"
}

function hide(donateDiv){
    var div=document.querySelector(donateDiv);
    div.remove();
}

var a = document.getElementById('select');
a.addEventListener('change',function(){
    var b = document.querySelectorAll('option:checked');
    for(var i = 0; i < b.length; i++){
    if(b[i].value == 0){
        alert('You are looking for Any Pet!')
    }else if(b[i].value == 1 ){
        alert('You are Looking for a Dog!')
    }else{
        alert('You are Looking for a Cat!')
    }
    }
});



