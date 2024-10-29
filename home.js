// Função para mostrar o modal e o fundo escurecido após 10 segundos
setTimeout(function () {
  document.getElementById("cookieModal").style.display = "block";
  document.getElementById("modalBackground").style.display = "block";
}, 1 * 1000); // 4 segundos

// Função para ocultar o modal e o fundo escurecido quando o usuário clicar em qualquer botão
function handleCookieConsent() {
  document.getElementById("cookieModal").style.display = "none";
  document.getElementById("modalBackground").style.display = "none";
}
