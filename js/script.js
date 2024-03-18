var menuToggle = document.getElementById("menu-toggle-js");
var menuIconAbrir = document.getElementById("menu-icon-abrir-js");
var menuIconFechar = document.getElementById("menu-icon-fechar-js");
var menu = document.getElementById("menu.js");
menuToggle.addEventListener("click", function () {
  if (menuIconAbrir.style.display === "none") {
    menuIconAbrir.style.display = "block";
    menuIconFechar.style.display = "none";
    menu.style.right = "-70px";
  } else {
    menuIconAbrir.style.display = "none";
    menuIconFechar.style.display = "block";
    menu.style.right = "0";
  }
});

document.getElementById("botao-contato").addEventListener("click", function () {
  var contatoSection = document.getElementById("contato");
  contatoSection.scrollIntoView({ behavior: "smooth" });
});
