"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// This funciton opens the modal window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// This function closes the modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// listen for a click event on one of the modals then run the openModal function
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

// listen for a click event on one of the modals then run the closeModal function
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// listen for a keydown event when esc is pressed run the closeModal function. 
document.addEventListener("keydown", function (e) {
  if(e.key === "Escape" && !modal.classList.contains("hidden")){
    closeModal(); 
  }
});
