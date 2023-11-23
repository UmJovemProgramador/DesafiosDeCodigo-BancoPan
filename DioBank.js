// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

// Crie um objeto chamado contaBancaria para armazenar informações da conta.
let contaBancaria = {
    // Obtém o nome do cliente da conta:
    cliente: gets(),
  
    // Obtém o número da conta:
    numeroConta: gets(),
  
    // Obtém o saldo inicial da conta e converte para número:
    saldoInicial: parseFloat(gets()),
  };
  
  // Impressão das informações: Nome, Número da Conta e Saldo:
  print(`Nome do cliente: ${contaBancaria.cliente}`);
  print(`Número da conta: ${contaBancaria.numeroConta}`);
  print(`Saldo: R$ ${contaBancaria.saldoInicial.toFixed(2)}`);
  