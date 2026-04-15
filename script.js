console.log("Portfólio carregado com sucesso!");

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(link => {
  link.addEventListener("click", function () {
    console.log(`Navegando para: ${this.textContent}`);
  });
});
