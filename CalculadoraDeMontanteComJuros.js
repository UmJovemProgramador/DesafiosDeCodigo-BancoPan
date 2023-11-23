const contaBancaria = {
    investimentoInicial: parseFloat(gets()),
    taxaJurosMensal: parseFloat(gets()),
    periodoMeses: parseInt(gets()),
  };
  
  const taxaJurosDecimal = contaBancaria.taxaJurosMensal / 100;
  const investimentoInicial = contaBancaria.investimentoInicial;
  const periodoMeses = contaBancaria.periodoMeses;
  
  const montante = investimentoInicial * Math.pow((1 + taxaJurosDecimal), periodoMeses);
  
  // É impresso informações sobre o investimento:
  print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
  print("Juros: " + contaBancaria.taxaJurosMensal);
  print("Período: " + contaBancaria.periodoMeses);
  print("Resultado: " + montante.toFixed(2));