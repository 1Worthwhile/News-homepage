let link_con = document.querySelector(".link");
let menu_bar = document.querySelector(".menu_bar");
let overlay = document.querySelector(".overlay");
console.log(menu_bar);
menu_bar.addEventListener("click", function () {
  overlay.classList.toggle("active");
  link_con.classList.toggle("active");
  menu_bar.classList.toggle("active");
});
