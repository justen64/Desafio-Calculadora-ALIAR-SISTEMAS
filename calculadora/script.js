function calcular() {
  let expressao = document.getElementById("expressao").value.trim();
  let resultado;

  if (!/^[0-9+\-*/().\s]+$/.test(expressao)) {
    document.getElementById('erro').textContent = 'Expressão inválida! Digite apenas números e operadores matemáticos (+, -, *, /).';
    return;
}

  try {
    resultado = eval(expressao);
    if (!isFinite(resultado)) {
      throw new Error("Resultado inválido");
    }
    document.getElementById("erro").textContent = "";
  } catch (error) {
    document.getElementById("erro").textContent =
      "Expressão inválida. Digite corretamente.";
    return;
  }
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("expressao").value = "";
}
