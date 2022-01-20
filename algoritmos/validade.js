function validaData(data, validade) {
  var dataAtual = new Date()
  const diasDeValidade = parseInt(validade.replace('d', ''))
  
  const dataDeValidade = new Date(data)
  dataDeValidade.setDate(dataDeValidade.getDate() + diasDeValidade)

  return dataDeValidade > dataAtual;
}

console.log(validaData("2021-11-17T20:40:09.503Z", "10d"))
console.log(validaData("2021-12-10T00:00:00.000Z", "180d"))