function gerarFibonacci(n) {

  if (n < 0) {
    return 'Erro: o número deve ser positivo.'
  }

  switch (n) {
    case 0:
      return [];
    case 1:
      return [0]
  }

  let sequenciaFibonacci = [0, 1];

  for (i = 2; i <= n - 1; i++) {
    sequenciaFibonacci[i] = sequenciaFibonacci[i - 2] + sequenciaFibonacci[i - 1];
  }

  return sequenciaFibonacci;
}

console.log(gerarFibonacci(6))