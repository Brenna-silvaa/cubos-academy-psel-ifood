function solucao(ano) {
	//seu codigo aqui
 const resultadoCopa = 2021 + 1; 
  const resultadoOlimpiada = 2021 + 3;
  if ((resultadoCopa - ano) % 4  === 0){
    console.log ("COPA");
  } else if ((resultadoOlimpiada - ano) % 4  === 0) {
    console.log ("JOGOS");
  } else {
    console.log("MEH");
  }
}
