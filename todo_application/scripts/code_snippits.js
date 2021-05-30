//We need to make a function that reads the input that is given in the text field
//We then need to display it on the screen
function getTask() {
    //This is slecting the input we have from the text field
    let inputValue = document.querySelector("#input").value;
  
    alert(inputValue);

    toDoList.push(inputValue); 
  }


  let todo1 = new Todo("Brush your teeth");
let todo2 = new Todo("clean your car");
let todo3 = new Todo("talk to mom");

toDoList.push(todo1);
toDoList.push(todo2);
toDoList.push(todo3);
console.log(toDoList);

document.querySelector('ul').value = "";
    
for(let i = 0; i<=toDoList.length; i++){
    ul.innerHTML += 
                `<li> 
                    <input type="checkbox" id="">
                    <span>${ toDoList[] }</span>
                    <button>X</button>
                <li>`;
}


checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    let selectedId = e.target.dataset.id;
    let selectedTask = toDoList.find((Todo) => Todo.Id == selectedId);

    selectedTask.Completed != selectedTask.Completed;

    localStorage.setItem("toDoList", JSON.stringify(toDoList));

    console.log(selectedTask);

    // let deleteButtons = document.querySelectorAll('button');

    // deleteButtons.forEach((deleteButton) =>{
    //   deleteButton
    // })
  });
});
