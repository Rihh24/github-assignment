console.log("hey there! its javascript!")

function whatIsThis(xmen){
    console.log(xmen)
}

// remove an element from the DOM

// function changeText(element){
//     console.log(element.innerText)
//     element.innerText = "Logout"
// }

function byeBye(element){
    console.log(element)
    element.remove()
}

function yell(element){
    alert("you clicked the forbidden div")
}

function hoverOver(element){
    alert("you hovered over the element")
}

function hoverOut(element){
    alert("you hovered outside of the element")
}


function changeSrc(element){
    element.src="https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Wario.png/250px-Wario.png"
}

function changeBack(element){
    element.src="https://upload.wikimedia.org/wikipedia/en/d/db/Yoshi_%28Nintendo_character%29.png"
}