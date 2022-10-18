var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat(element){
    animalImg.src = "/Images/cat.jpeg";
    element.remove();
   // element.style.backgroundColor = "goldenrod";

}

function pickDog(element){
    animalImg.src = "/Images/dog.jpeg";
    element.classList.add("btn")
}