//import "./index.css";



const inputForm = document.getElementById("form");
const addButton = document.getElementById("add");
const birthdayList = document.getElementById("birthdayList");


const newText = document.createElement("h3");
newText.innerText = "Never Forget any birthdays and plan ahead of the occasion";
newText.style.color = "white";


const headerText = document.querySelector(".heading");
headerText.insertBefore(newText, headerText.firstChild);


// alert("hello")

inputForm.addEventListener("submit", (e) => {
  // alert("hi")
  e.preventDefault();
   
    const personName = inputForm.querySelector('input[name="name"]').value.trim();
  if (personName === "") {
    // alert("Please enter name"); 
    return;
  }

 

});

