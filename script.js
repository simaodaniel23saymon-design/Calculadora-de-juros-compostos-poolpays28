
const translations = {
  pt: 'Calculadora de Juros Pooolpays',
  en: 'Pooolpays Interest Calculator',
  es: 'Calculadora de Interés Pooolpays',
  hi: 'Pooolpays ब्याज कैलकुलेटर'
};

function changeLanguage(lang){
  document.getElementById('title').innerText = translations[lang];
  document.getElementById('language-btn').innerText = {pt:'🇧🇷',en:'🇬🇧',es:'🇪🇸',hi:'🇮🇳'}[lang];
}

function calcularJurosPooolpays(){
  const capital = parseFloat(document.getElementById("capital").value);
  const repeticoes = parseInt(document.getElementById("repeticoes").value);
  const cicloValue = document.getElementById("ciclo").value;
  const [dias, taxa] = cicloValue.split("-").map(Number);
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";

  // Validação dos campos
  if(isNaN(capital) || capital <= 0){
    resultadoElement.innerHTML = '<span style="color:red">Insira um valor inicial válido.</span>';
    return;
  }
  if(isNaN(repeticoes) || repeticoes < 1){
    resultadoElement.innerHTML = '<span style="color:red">Insira o número de repetições (mínimo 1).</span>';
    return;
  }
  if(isNaN(dias) || isNaN(taxa)){
    resultadoElement.innerHTML = '<span style="color:red">Selecione um ciclo válido.</span>';
    return;
  }

  // Cálculo de juros compostos
  const montante = capital * Math.pow(1 + taxa, repeticoes);
  const lucro = montante - capital;

  resultadoElement.innerHTML = `
    <p><strong>Montante Final:</strong> $${montante.toFixed(2)}</p>
    <p><strong>Lucro Total:</strong> $${lucro.toFixed(2)}</p>
    <p><strong>Ciclos:</strong> ${repeticoes} x ${dias} dia(s) (${(taxa*100).toFixed(2)}% por ciclo)</p>
  `;
}
