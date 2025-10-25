// Translations for the interface
const translations = {
  "pt-BR": {
    title: "Calculadora jurosPooolpays",
    subtitle: "Calcule rendimento com ciclos compostos",
    capital: "Capital Inicial (R$):",
    tempo: "Tempo Total (dias):",
    ciclo: "Escolha o Ciclo de Aporte:",
    calcBtn: "Calcular Rendimento",
    waiting: "Preencha os campos e clique em Calcular.",
    invalid: "Por favor, insira valores válidos e maiores que zero.",
    cyclesText: "Ciclos Completos",
    totalInterest: "Total de Juros Ganhos",
    finalAmount: "Montante Final Acumulado",
    note: "Cálculo baseado em ciclos completos."
  },
  "pt-PT": {
    title: "Calculadora jurosPooolpays",
    subtitle: "Calcule rendimento com ciclos compostos",
    capital: "Capital Inicial (€):",
    tempo: "Tempo Total (dias):",
    ciclo: "Escolha o Ciclo de Aporte:",
    calcBtn: "Calcular Rendimento",
    waiting: "Preencha os campos e clique em Calcular.",
    invalid: "Por favor, insira valores válidos e maiores que zero.",
    cyclesText: "Ciclos Completos",
    totalInterest: "Total de Juros Ganhos",
    finalAmount: "Montante Final Acumulado",
    note: "Cálculo baseado em ciclos completos."
  },
  "en": {
    title: "Compound Interest Calculator",
    subtitle: "Calculate returns using fixed investment cycles",
    capital: "Initial Capital (R$):",
    tempo: "Total Time (days):",
    ciclo: "Choose Contribution Cycle:",
    calcBtn: "Calculate Return",
    waiting: "Fill the fields and click Calculate.",
    invalid: "Please enter valid values greater than zero.",
    cyclesText: "Complete Cycles",
    totalInterest: "Total Interest Earned",
    finalAmount: "Final Accumulated Amount",
    note: "Calculation based on full cycles."
  },
  "hi": {
    title: "यौगिक ब्याज कैलकुलेटर",
    subtitle: "नियत चक्रों के साथ रिटर्न की गणना करें",
    capital: "प्रारंभिक पूँजी (R$):",
    tempo: "कुल समय (दिन):",
    ciclo: "योगदान चक्र चुनें:",
    calcBtn: "वापसी गणना करें",
    waiting: "फ़ील्ड भरें और गणना पर क्लिक करें।",
    invalid: "कृपया शून्य से बड़े मान दर्ज करें।",
    cyclesText: "पूर्ण चक्र",
    totalInterest: "कुल ब्याज अर्जित",
    finalAmount: "अंतिम संचयी राशि",
    note: "पूर्ण चक्रों के आधार पर गणना।"
  }
};

function setLanguage(lang){
  const t = translations[lang] || translations["pt-BR"];
  document.documentElement.lang = lang;
  document.getElementById('title').textContent = t.title;
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('label-capital').textContent = t.capital;
  document.getElementById('label-tempo').textContent = t.tempo;
  document.getElementById('label-ciclo').textContent = t.ciclo;
  document.getElementById('calc-btn').textContent = t.calcBtn;
  document.getElementById('resultado').textContent = t.waiting;
  document.getElementById('note').textContent = t.note;

  // store selected language
  localStorage.setItem('juros_lang', lang);
}

// Attach language buttons
document.addEventListener('DOMContentLoaded', () => {
  // init language from storage or browser
  const saved = localStorage.getItem('juros_lang') || navigator.language || 'pt-BR';
  const initial = (saved.startsWith('pt') && saved.includes('PT')) ? 'pt-PT' : (saved.startsWith('pt') ? 'pt-BR' : (saved.startsWith('hi') ? 'hi' : (saved.startsWith('en') ? 'en' : 'pt-BR')));
  setLanguage(initial);

  document.querySelectorAll('.lang-switch .flag').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      document.querySelectorAll('.lang-switch .flag').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      setLanguage(lang);
    });
  });

  document.getElementById('calc-btn').addEventListener('click', calcularJurosPooolpays);
});

// Main calculation function
function calcularJurosPooolpays() {
  const capitalInicial = parseFloat(document.getElementById('capital').value);
  const tempoTotalDias = parseInt(document.getElementById('tempoTotal').value);
  const cicloEscolhido = document.getElementById('ciclo').value;
  const resultadoElement = document.getElementById('resultado');
  const lang = localStorage.getItem('juros_lang') || document.documentElement.lang || 'pt-BR';
  const t = translations[lang] || translations['pt-BR'];

  if (isNaN(capitalInicial) || isNaN(tempoTotalDias) || capitalInicial <= 0 || tempoTotalDias <= 0) {
    resultadoElement.textContent = t.invalid;
    return;
  }

  const [duracaoCiclo, taxaJuros] = cicloEscolhido.split('-').map(Number);
  const numCiclos = Math.floor(tempoTotalDias / duracaoCiclo);

  // Compound interest
  const montanteFinal = capitalInicial * Math.pow((1 + taxaJuros), numCiclos);
  const totalJuros = montanteFinal - capitalInicial;

  // Format currency depending on language (keep BRL symbol but formatting)
  const montanteFormatado = montanteFinal.toLocaleString(lang === 'en' ? 'en-US' : (lang === 'hi' ? 'hi-IN' : 'pt-BR'), { style: 'currency', currency: 'BRL' });
  const jurosFormatados = totalJuros.toLocaleString(lang === 'en' ? 'en-US' : (lang === 'hi' ? 'hi-IN' : 'pt-BR'), { style: 'currency', currency: 'BRL' });

  resultadoElement.innerHTML = `
    <div>
      <div>${t.cyclesText}: <strong>${numCiclos}</strong></div>
      <div>${t.totalInterest}: <strong>${jurosFormatados}</strong></div>
      <div>${t.finalAmount}: <strong>${montanteFormatado}</strong></div>
      <div style="font-size:0.85em;color:#6b7280;margin-top:6px;">${t.note} (${numCiclos * duracaoCiclo} de ${tempoTotalDias} dias)</div>
    </div>
  `;
}
