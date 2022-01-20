function limpaObjeto(objeto) {
  for (var propriedade in objeto) {
    objeto[propriedade] === null ? delete objeto[propriedade] : objeto[propriedade]
  }
  return objeto;
}

console.log(limpaObjeto({
  "fizz": "buzz",
  "foo": null,
  "bar": 42
}))