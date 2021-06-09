
function solucao(letra, palavras) {
	//seu codigo aqui
   let contagemDeCriancas = 0;
  for (let i = 0; i < palavras.length; i++) {
      if(palavras[i].substr(0,1) !== letra) {
        contagemDeCriancas++
      }
      
  }
  console.log(contagemDeCriancas);
}
    