// Função para mostrar o modal de cookies após 5 segundos
setTimeout(function () {
  document.getElementById("cookieModal").style.display = "block";
  document.getElementById("modalBackground").style.display = "block";
}, 50 * 1000);

// Função para ocultar o modal de cookies e o fundo escurecido
function handleCookieConsent() {
  document.getElementById("cookieModal").style.display = "none";
  document.getElementById("modalBackground").style.display = "none";
}

// Função para mostrar o modal de administração de cookies
function openAdminModal() {
  document.getElementById("cookieModal").style.display = "none"; // Esconde o primeiro modal
  document.getElementById("adminModal").style.display = "block"; // Mostra o modal de administração
}

// Função para aceitar todos os cookies e fechar o modal
function acceptAllCookies() {
  document.getElementById("adminModal").style.display = "none";
  document.getElementById("modalBackground").style.display = "none";
  alert("Todos os cookies foram aceitos.");
}

// Função para rejeitar todos os cookies e fechar o modal
function rejectAllCookies() {
  document.getElementById("adminModal").style.display = "none";
  document.getElementById("modalBackground").style.display = "none";
  alert("Todos os cookies foram rejeitados.");
}
