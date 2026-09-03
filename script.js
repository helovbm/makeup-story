// LÓGICA DE TROCA DE ABAS
function openTab(evt, tabId) {
  // Oculta todas as abas
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // Remove o estado ativo de todos os botões
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => btn.classList.remove('active'));

  // Ativa a aba e o botão selecionado
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// TESTADOR VIRTUAL DE CORES
function trocarCor(hexColor, nomeCor) {
  const preview = document.getElementById('lipPreview');
  const label = document.getElementById('colorName');
  
  preview.style.backgroundColor = hexColor;
  label.innerText = nomeCor;
}

// QUIZ DE DIAGNÓSTICO DE PELE
function recomendarBase(estilo) {
  const resultDiv = document.getElementById('quizResult');
  resultDiv.style.display = 'block';

  if (estilo === 'matte') {
    resultDiv.innerText = "Recomendação Océane: Base Matte HD acompanhada de Pó Translúcido para controle de oleosidade e acabamento uniforme.";
  } else if (estilo === 'glow') {
    resultDiv.innerText = "Recomendação Océane: Iluminador Líquido misturado à Base Fluida e Bruma Fixadora Iluminadora.";
  } else {
    resultDiv.innerText = "Recomendação Océane: BB Cream ou Tint de Cobertura Leve aplicado com esponja úmida.";
  }
}