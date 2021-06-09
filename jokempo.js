function solucao(joao, andre) {
    // Escreva seu codigo aqui
    if(joao === andre) {
    console.log('EMPATE');
  } else if(joao === 'PAPEL') {
    if (andre === 'TESOURA') {
      console.log('ANDRE')
    } else if (andre === 'PEDRA') {
      console.log('JOAO')
    }
  } else if(joao === 'TESOURA') {
    if (andre === 'PAPEL') {
      console.log('JOAO')
    } else if (andre === 'PEDRA') {
      console.log('ANDRE')
    }
  } else if(joao === 'PEDRA') {
    if (andre === 'PAPEL') {
      console.log('ANDRE')
    } else if (andre === 'TESOURA') {
      console.log('JOAO')
    }
  }
 }
