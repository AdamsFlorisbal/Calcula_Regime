function calcularRegime() {
  const valorFaturamento = parseFloat(document.getElementById('valor').value);

  if (isNaN(valorFaturamento)) {
      alert('Por favor, insira um valor válido.');
      return;
  }

  let resultado = '';

  if (valorFaturamento <= 4800000) {
      resultado = 'Melhor regime tributário: Simples Nacional';
  } else if (valorFaturamento <= 7200000) {
      resultado = 'Melhor regime tributário: Lucro Presumido';
  } else {
      resultado = 'Melhor regime tributário: Lucro Real';
  }

  document.getElementById('resultado').textContent = resultado;
}
