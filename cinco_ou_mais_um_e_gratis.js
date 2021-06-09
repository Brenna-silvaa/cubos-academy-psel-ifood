function solucao(precos) {
    //seu codigo aqui
    let menorPreco = precos[0];
  let soma = 0;
  if (precos.length >= 5) {
   for(let index = 0; index < precos.length; index++) {
    if (precos[index] < menorPreco) {
      menorPreco = 0;
      menorPreco = precos[index];
    }
   }
  const elemento = precos.indexOf(menorPreco);
  precos.splice(elemento, 1);
  for(let index = 0; index < precos.length; index++) {
    soma += precos[index];
  }
  console.log(soma);
  } else {
   for(let index = 0; index < precos.length; index++) {
    soma += precos[index];
   }
   console.log(soma);
  }
} 