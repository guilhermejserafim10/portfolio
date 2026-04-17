console.log("Portfólio carregado com sucesso!");

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(link => {
  link.addEventListener("click", function () {
    console.log(`Navegando para: ${this.textContent}`);
  });
});

const elementos = document.querySelectorAll(".animar");

function animarScroll() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 80) {
      el.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);