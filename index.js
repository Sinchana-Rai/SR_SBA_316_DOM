
const messages = [];
const inputForm = document.getElementById("form");
const birthdayList = document.getElementById("birthdayList");
const errorMsgs = document.getElementById("errorDisplay");
const addBtn = document.getElementById("add");

toggleColors= ["rgb(181, 201, 249)","pink","turquoise"]
const colorDropdown = document.getElementById("colorDropdown");
colorDropdown.style.backgroundColor= "rgb(244, 185, 217)";
colorDropdown.style.color = "white";



function fillDropdown(colors){
  colors.forEach((color,index) => {
    const option = document.createElement('option');

    switch(index){
      case 0:
        option.value= color;
        option.textContent = "Lavender";
        break;
        case 1:
          option.value = color;
          option.textContent = "Pink";
          break;
        case 2:
          option.value = color;
          option.textContent = "Turquoise";
          break;
        default:
          option.textContent="no color";

    }
    colorDropdown.appendChild(option);
    
  });
}

fillDropdown(toggleColors);

const button = document.querySelector("button");

addBtn.addEventListener("mouseover", () => {
  addBtn.textContent = "Fill in all details before you click the button";
});

addBtn.addEventListener("mouseout", () => {
  addBtn.textContent = "Add Birthday";
});

const newText = document.createElement("h3");
newText.innerText = "Never Forget any birthdays and plan ahead of the occasion";
newText.style.color = "white";

const headerText = document.querySelector(".heading");
headerText.insertBefore(newText, headerText.firstChild);

colorDropdown.addEventListener("change",() => {
  const chooseColor = colorDropdown.value;
  if (chooseColor.toLowerCase() === "turquoise")
  {
    newText.style.color = "black";
    document.body.style.backgroundColor = chooseColor;
  }
  else{
    newText.style.color = "white";
  document.body.style.backgroundColor = chooseColor;
  }
});

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
   
  const personName = inputForm.querySelector('input[name="name"]').value.trim();
  const birthDate = inputForm.querySelector('input[name="bDate"]').value.trim();

  
 if (personName === "" || personName === "Enter Name") {
    messages.push("Name cannot be blank.");
}
if (birthDate === "" || birthDate === "mm/dd/yyyy") {
    messages.push("Birthdate cannot be blank.");
}
if (messages.length > 0) {
    displayErrors(messages);
    messages.length=0;
    return;
}  else if (messages.length == 0)
{
  errorMsgs.innerText ="";

}

  const infoList = document.createElement("div");
  infoList.classList.add("birthdayList");

  const birthdayListSpan = document.createElement("span");
  birthdayListSpan.textContent = personName;
  birthdayListSpan.style.marginRight = "30px";
  birthdayListSpan.style.color = "white";
  birthdayListSpan.style.fontSize = "25px";
  infoList.appendChild(birthdayListSpan);

  const dateSpan = document.createElement("span");
  dateSpan.textContent = birthDate;
  dateSpan.style.marginRight = "30px";
  dateSpan.style.color = "white";
  dateSpan.style.fontSize = "25px";
  infoList.appendChild(dateSpan);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.style.marginRight = "10px";
  infoList.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  infoList.appendChild(deleteButton);

  birthdayList.appendChild(infoList);

  inputForm.elements["name"].value = "";
  inputForm.elements["bDate"].value = "";


  editButton.addEventListener("click", () => {
  const editedName = prompt("Edit Name:", birthdayListSpan.textContent);
  const editedDate = prompt("Edit Birth Date:", dateSpan.textContent);
    
   
    if (editedName.trim() !== "") {
      birthdayListSpan.textContent = editedName.trim();
    }

    if (editedDate.trim() !== "") {
      dateSpan.textContent = editedDate.trim();
    }
  });

  deleteButton.addEventListener("click", () => {
    birthdayList.removeChild(infoList);
  });
  

});

function displayErrors(messages) {
  if (messages.length > 0) {
      errorMsgs.style.display = "block";
      errorMsgs.innerHTML = `${messages.join('<br>')}`;
      
  } else {
    
      errorMsgs.style.display = "none";
      errorMsgs.innerHTML = "";
      
  }
}