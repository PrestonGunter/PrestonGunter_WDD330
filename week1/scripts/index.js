const links = [

  {
    label: "WDD 330 Home Page",
    url: "../week1/homepage.html"
  },

  {
    label: "Week 1 notes",
    url: "../week1/index.html"
  },

  {
    label: "Week 2 notes",
    url: "../week2/index.html"
  },

  {
    label: "Week 2 Team Activivty",
    url: "../week2/team_week2.html"
  },

  {
    label: "Week 3 notes",
    url: "../week3/index.html"
  },

  {
    label: "Week 3 Team Activity: Array Cardio",
    url: "../week3/team_week3.html"
  },

  {
    label: "Week 4 notes",
    url: "../week4/index.html"
  },

  {
    label: "Week 4 Team Activity: Tic Tac Toe",
    url: "../week4/team_week4.html"
  },

  {
    label: "Week 5 notes",
    url: "../week5/index.html"
  },

  {
    label: "To Do Application",
    url: "../todo_application/todo.html"
  },

  {
    label: "Week 7 notes",
    url:"../week7/index.html"
  },

  {
    label: "Week 8 notes",
    url:"../week8/index.html"
  },

  {
    label: "Week 9 notes",
    url:"../week9/index.html"
  }

];


//BETTER
//Get pointer to ul tag
let ul = document.querySelector('#myDropdown');
links.forEach(
  link => {
    ul.innerHTML +=
      `
            <li>
                <a href="${link.url}">${link.label}</a>
            </li>
        
        `;
  }
);


// My DROP DOWN MENU
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}