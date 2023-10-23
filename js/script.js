// Obtém o elemento com o ID "topo" e armazena-o na variável "menu"
const menu = document.getElementById("topo");

// Array de IDs de âncoras que correspondem a seções da página
const links = ["raiz", "portfolio", "contato", "sobre"];

// Itera sobre cada âncora no array "links"
links.forEach((link) => {

  // Seleciona o elemento âncora correspondente ao ID atual do loop
  const elemento = document.querySelector(`a[name="${link}"]`);

  // Verifica se o elemento âncora foi encontrado
  if (elemento !== null){

    // Adiciona um evento de clique ao elemento âncora
    elemento.addEventListener("click", () => {

      // Obtém o elemento com o ID correspondente ao link clicado
      const alvo = document.getElementById(link);

      // Verifica se o elemento alvo foi encontrado
      if (alvo !== null){

        // Calcula a distância entre o topo do elemento alvo e a parte superior da janela
        const topo = alvo.getBoundingClientRect().top;

        // Obtém a posição atual de rolagem da janela e subtrai a altura do menu
        const scroll = window.scrollY - menu.clientHeight;

        // Rola suavemente até a posição do elemento alvo
        scrollTo({behavior: "smooth", top: topo + scroll});
      }
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Obtém o elemento do formulário com o ID "email" e armazena-o na variável "envio"
const envio = document.getElementById("email");

// Adiciona um ouvinte de evento para o evento de envio do formulário
envio.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede o envio padrão do formulário
    evento.stopPropagation(); // Impede que o evento de propagação suba na hierarquia de elementos

    // Exibe uma mensagem de alerta para o usuário
    window.alert("Mensagem encaminhada com sucesso, obrigado por entrar em contato!");

    // Reseta o formulário, limpando os campos
    envio.reset();
});