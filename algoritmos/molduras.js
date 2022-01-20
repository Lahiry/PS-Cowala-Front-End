function exibeMoldura(largura, altura) {

  var moldura = "";

  for (indiceColuna = 1; indiceColuna <= altura; indiceColuna++) {
      
    for (indiceLinha = 1; indiceLinha <= largura; indiceLinha++) {

      if (indiceColuna === 1 || indiceColuna === altura) {

        indiceLinha === 1 || indiceLinha === largura ? moldura += "+" : moldura += "-"

      } else {

        indiceLinha === 1 || indiceLinha === largura ? moldura += "-" : moldura += " "

      }
    }
    
    moldura += "\n"
  }

  return moldura;
}

console.log(exibeMoldura(9, 6))