function solucao(produtos) {
	//seu codigo aqui

  let listaTop = [];
  let listaProdutos = [];
  let totalTop = 0;
  let percentual = 0;
  let totalProdutos = 0;
  for(let i = 0; i < produtos.length; i++){
  if (produtos[i].preco > 10000){
    listaTop.push(produtos[i].preco);
  }
} 
for (let i = 0; i < listaTop.length; i++){
  totalTop += listaTop[i]; 
};
for(let i = 0; i < produtos.length; i++){
  if (produtos[i].preco > 0){
    listaProdutos.push(produtos[i].preco)
    };
}
for (let i = 0; i < listaProdutos.length; i++) {
   totalProdutos += listaProdutos[i];
}
percentual = totalTop /totalProdutos;

const resultado = { totalTop, percentual}; 
console.log(resultado)
}
