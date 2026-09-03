// Exibe uma mensagem simples no console do navegador
console.log("Olá, mundo!");

// Função para alterar um texto da página ao clicar em um botão
function mudarTexto() {
  const titulo = document.getElementById("titulo-principal");
  titulo.textContent = "Você clicou no botão!";
}