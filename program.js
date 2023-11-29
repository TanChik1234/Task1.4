"use strickt"
//  Task1
 document.getElementById("button2").onclick = () => {
  document.getElementById("square").remove();
 }

 document.getElementById("button3").onclick = () => {
  document.getElementById("square").setAttribute("class", "hidden");
 } 

//  Task2
document.getElementById("button-hidden").onclick = () =>{
  let square = document.getElementById("second-square");
  if(square.style.display == "none"){
    square.style.display = "block";
  } else {
    square.style.display = "none";
  }
}

//  Task3
document.getElementById("button-hidden-all-button").onclick = () => {
  let squares = document.getElementsByClassName("task3-button");
  for (const element of squares) {
    if(element.style.display == "none"){
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
  }
}

// Task4
document.getElementById("task4-button").onclick = ()=>{
  let textAreaTask4 = document.getElementById("selector-textarea").value;
  let elements = document.querySelectorAll(textAreaTask4);
  for (const element of elements) {
    if(element.className.includes("hidden")){
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
  }
  document.getElementById("selector-textarea").value = "";
}

// Task5
let buttonCkliked = false;
document.getElementById("yellow-square").onclick = ()=>{
  if(!buttonCkliked){
    alert("Hello");
    buttonCkliked = true;
  } else {
    document.getElementById("yellow-square").classList.add("hidden");
  }
}

// Task6
document.getElementById("task6-button").onmouseenter = ()=>{
  let square = document.getElementById("red-square");
  square.classList.remove("hidden")
}
document.getElementById("task6-button").onmouseleave = ()=>{
  let square = document.getElementById("red-square");
  square.classList.add("hidden")
}

// Task7
let greenSquare = document.getElementById("task7-text-area");
greenSquare.addEventListener("focus", ()=> {
  let square = document.getElementById("green-square");
  square.classList.remove("hidden");
})
greenSquare.addEventListener("input", ()=>{
  let square = document.getElementById("green-square");
  square.classList.add("hidden");
})

//  Task8
document.getElementById("open-image-button").onclick = ()=>{
  document.getElementById("images-container").innerHTML = "";
  let urlImage = document.getElementById("link-on-image-textarea").value;
  let image = document.createElement("img");
  image.src = urlImage;
  image.onerror = function(){
    image.remove();
  }
  image.classList.add("input-image");
  
  let container = document.querySelector("#images-container");
  container.append(image);
  document.getElementById("link-on-image-textarea").value="";
}

//  Task9
document.getElementById("open-few-images-button").onclick = ()=>{
  document.getElementById("images-container-task9").innerHTML = "";

  let urlImages = document.getElementById("links-textarea").value.split("\n");

  for(let i = 0; i < urlImages.length; i++){
    let image = document.createElement("img");
    image.src = urlImages[i];
    image.onerror = function(){
      image.remove();
    }
    image.classList.add("input-image");
  
    let container = document.querySelector("#images-container-task9");
    container.append(image);
  }
  document.getElementById("links-textarea").value="";
}

// Task10
let doc = document.querySelector("html");
doc.onmousemove = (event) =>{
  let xCoord = event.clientX;
  let yCoord = event.clientY;
  document.getElementById("coord-mouse").innerHTML = `X: ${xCoord}, Y: ${yCoord}`;
}

// Task11
let lang = navigator.language || navigator.userLanguage;
document.getElementById("user-language").innerHTML = `Lang: ${lang}`;

// Task12
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((position) => {
    let conteiner = document.getElementById("geolocation");
    conteiner.innerHTML = `Ш: ${position.coords.latitude}, Д: ${position.coords.longitude}`
  })
} else {
  document.getElementById("geolocation").remove();
}

// Task13
//       Subtask 1
let localTextArea = document.getElementById("local");
if(localStorage.localTextArea !== undefined){
  localTextArea.value = localStorage.localTextArea;
} else {
  localTextArea.value = "These data are stored in local memory";
}

localTextArea.oninput = () => {
  localStorage.localTextArea = localTextArea.value;
}

//       Subtask2
let cookiesTextArea = document.getElementById("cooky");
let cookies = document.cookie.split("; ");
for(let i = 0; i < cookies.length; i++){
  let nameAndValue = cookies[i].split("=",2);
  if(nameAndValue[0] === "cookiesTextArea"){
    cookiesTextArea.value = nameAndValue[1];
  }
}
if(cookiesTextArea.value === "" || cookiesTextArea.value === undefined){
  cookiesTextArea.value = "These data are stored in cookies";
}
cookiesTextArea.oninput = () => {
  document.cookie = `cookiesTextArea=${cookiesTextArea.value}`;
}


//       Subtask3
let sessionTextArea = document.getElementById("session");
if(sessionStorage.sessionTextArea !== undefined){
  sessionTextArea.value = sessionStorage.sessionTextArea;
} else {
  sessionTextArea.value = "These data are stored in sesion memory";
}

sessionTextArea.oninput = () => {
  sessionStorage.sessionTextArea = sessionTextArea.value;
}

// Task14
document.getElementById("scroll-button").onclick = (event)=>{
  event.preventDefault();
  document.getElementById("body").scrollIntoView({
    behavior: 'smooth'
  });
  document.getElementById("scroll-button").classList.add("hidden");
}

function checkScrollPosition(){
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.documentElement.scrollHeight;

  console.log(`SP ${scrollPosition}, WH ${windowHeight}, DH ${documentHeight}`);
  if (scrollPosition + windowHeight +1 >= documentHeight) {
    document.getElementById("scroll-button").classList.remove("hidden");
  } else {
    document.getElementById("scroll-button").classList.add("hidden");
  }
}

window.addEventListener("scroll", checkScrollPosition);

// Task15
let bigSquare = document.getElementById("big-square");
bigSquare.onclick = (event) => {
  let cklickedElement = event.target;
  if(cklickedElement.id === "small-square"){
    alert("You press small square");
  } else {
    alert("You press big square");
  }
  
};

// Task16
document.getElementById("add-gray-square").onclick = ()=>{
  let bigGreySquare = document.getElementById("big-gray-square");
  bigGreySquare.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

document.getElementById("big-gray-square").onclick = () => {
  document.getElementById("big-gray-square").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Task17
document.getElementById("button-go").onclick = (event) => {
  event.preventDefault();
}

// Task18
let inputFile = document.getElementById("label-add-file");
let label = document.getElementById("label-add-file")

inputFile.addEventListener('dragover', (event)=>{
  event.preventDefault();
  label.classList.add('dragging');
});

inputFile.addEventListener('dragleave', (event)=>{
  event.preventDefault();
  label.classList.add('dragging');
});

inputFile.addEventListener('drop', (event)=>{
  event.preventDefault();
  label.classList.remove("dragging");
  label.classList.add("drop");
  let file = event.dataTransfer.files[0];
  
  label.textContent = file.name;
});
