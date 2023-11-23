//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Crie o objeto JSON do Cliente 1 e suas propriedades (conta e saldo):
const cliente1 = { 
    nome: gets(),
    numeroConta: parseInt(gets()),
    saldo: parseFloat(gets()),
  };
  
  // TODO: Crie o objeto JSON do Cliente 2 e suas propriedades (nome, conta e saldo):
  const cliente2 = { 
    nome: gets(),
    numeroConta: parseInt(gets()),
    saldo: parseFloat(gets()),
  };
  
  //TODO: Compare os JSONs (nome, conta, saldo) dos Clientes, verificando se todas as propriedades são iguais:
  
  if ((cliente1.nome === cliente2.nome) && (cliente1.numeroConta === cliente2.numeroConta) && (cliente1.saldo === cliente2.saldo)) {
    print("As contas bancárias são iguais.");
  } else {
    print("As contas bancárias são diferentes.")
  }
  