
console.log("Portfólio carregado com sucesso!");


/* =========================
   MENU DE NAVEGAÇÃO
========================= */

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(link => {
  link.addEventListener("click", function () {
    console.log(`Navegando para: ${this.textContent}`);
  });
});


/* =========================
   ANIMAÇÕES AO ROLAR
========================= */

const elementos = document.querySelectorAll(".animar");

function animarScroll() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {

    if (el.hidden) return;

    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 80) {
      el.classList.add("ativo");
    }

  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);


/* =========================
   FILTROS DOS CERTIFICADOS
========================= */

const filtrosCertificados = document.querySelectorAll(
  ".filtro-certificado"
);

const cardsCertificados = document.querySelectorAll(
  ".card-certificado"
);

if (filtrosCertificados.length > 0) {

  /* CONTADORES AUTOMÁTICOS */

  filtrosCertificados.forEach(botao => {

    const categoria = botao.dataset.filtro;

    const quantidade = categoria === "todos"
      ? cardsCertificados.length
      : Array.from(cardsCertificados).filter(card =>
          card.dataset.categoria === categoria
        ).length;

    const contador = botao.querySelector(".contador");

    if (contador) {
      contador.textContent = quantidade;
    }

  });


  /* FILTRAGEM DOS CERTIFICADOS */

  filtrosCertificados.forEach(botao => {

    botao.addEventListener("click", () => {

      const categoriaSelecionada = botao.dataset.filtro;


      /* ATUALIZAR BOTÃO SELECIONADO */

      filtrosCertificados.forEach(filtro => {

        filtro.classList.remove("ativo");
        filtro.setAttribute("aria-pressed", "false");

      });

      botao.classList.add("ativo");
      botao.setAttribute("aria-pressed", "true");


      /* EXIBIR CERTIFICADOS DA CATEGORIA */

      cardsCertificados.forEach(card => {

        const categoriaCard = card.dataset.categoria;

        const exibir =
          categoriaSelecionada === "todos" ||
          categoriaCard === categoriaSelecionada;

        card.hidden = !exibir;

      });


      /* ATUALIZAR ANIMAÇÕES */

      animarScroll();

    });

  });

}
