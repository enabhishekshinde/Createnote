const notecontainer = document.querySelector(".notes-container");
const createbtn  = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createbtn.addEventListener("click",()=>{

    let inputbox = document.createElement("p");
    let img      = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="delite.png";
    notecontainer.appendChild(inputbox).appendChild(img);


})