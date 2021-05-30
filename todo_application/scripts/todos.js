import { Todo } from "./todo.js";
const input = document.querySelector("#input");

let toDoList = [];

if (localStorage.getItem("toDoList")) {
  toDoList = JSON.parse(localStorage.getItem("toDoList"));
}

printToScreen(toDoList);

//This is letting the input that is being read from local storage to be printed to the screen.
function printToScreen(tasks) {
  const ul = document.querySelector("#items");
  ul.innerHTML = "";

  tasks.forEach((toDoItem) => {
    ul.innerHTML += `<li class="completed">
        <input type="checkbox" data-id="${toDoItem.Id}" ${
      toDoItem.Completed ? "checked" : ""
    }> 
        <span>${toDoItem.Content}</span>
        <button data-id="${toDoItem.Id}" class="delete">X</button>
       </li>`;
  });

  let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (e) => {
      let inputId = e.target.dataset.id;
      let selectedCheckBox = toDoList.find(
        (task) => task.Id === parseInt(inputId)
      );

      selectedCheckBox.Completed = !selectedCheckBox.Completed;

      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    });
  });

  // //This function will allow you to delete a task that the use picked by pressing the button
  let deleteButtons = document.querySelectorAll("button");

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (e) => {
      let inputId = e.target.dataset.id;
      let selectedCheckBoxIndex = toDoList.findIndex(
        (task) => task.Id === parseInt(inputId)
      );

      //delete an object from array
      toDoList.splice(selectedCheckBoxIndex, 1);
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
      printToScreen(toDoList);
    });
  });
}

//This function reads what is put into the input field and then puts that input into local storage
//It then uses the printToScreen to display the input
document
  .querySelector('input[type="button"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = new Todo(document.querySelector("#input").value);
    toDoList.push(inputValue);

    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    input.value = "";
    printToScreen(toDoList);
  });

//This will let you clear everything from local storage
//This will also clear everything from the display
//Also make a prompt warning ther user that this will clear all the task are they sure they want to go ahead
document.querySelector("#clearAll").addEventListener("click", (e) => {
  let prompt = confirm(
    "are you sure you want to clear all of your tasks forever?"
  );
  if (prompt) {
    //add code later that removes everything from the display.
    localStorage.clear();
    input.value = "";
    location.reload();
  }
});

//buttons for all, active, and completed
document.querySelector("#active").addEventListener("click", (e) => {
  printToScreen(toDoList.filter((task) => task.Completed === false));
});

document.querySelector("#completed").addEventListener("click", (e) => {
  printToScreen(toDoList.filter((task) => task.Completed === true));
});

document.querySelector("#all").addEventListener("click", (e) => {
  printToScreen(toDoList);
});
