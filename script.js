const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const contact = document.querySelector(".contact");
const btnClose = document.querySelector(".fa");

modal.style.display = "none";

btn.onclick = function () {
  modal.style.display = "block";
};

btnClose.onclick = function () {
  modal.style.display = "none";
};

contact.onclick = function () {
  modal.style.display = "none";
};
