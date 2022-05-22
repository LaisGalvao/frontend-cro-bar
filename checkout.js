const bar = document.createElement("div");
bar.classList.add("progressbar");

const colorBar = document.createElement("div");
colorBar.classList.add("colorbar");
document.body.appendChild(bar);

let price = 100;

//antes fiz o steste usando um Array, depois peguei o Elemento
//que retorna o total do carrinho para fazer os cálculos
// a variável carrinho começa em zero para não dar erro
let carrinho = 0 


//se a variável for deferente de undefined (ou seja, se o elemento existe)
if(document.getElementsByClassName("valor-total")[0] !== 0 || undefined){
    
    carrinho =  document.getElementsByClassName("valor-total")[0].textContent
    carrinho.slice(2)
    
}else{
    carrinho = 0
}

let result = price - parseFloat(carrinho);


if (parseFloat(carrinho) === 0) {
  bar.textContent =
    `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
  colorBar.style.display = "none";
}

if (result === price) {
  bar.innerHTML =
    `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
  colorBar.style.display = "none";
}

if (parseFloat(carrinho).length !== 0 && result < price) {
  colorBar.style.width = price - result + "%";
  bar.innerHTML =
    `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

  bar.appendChild(colorBar);
}

if (result <= 0) {
  colorBar.style.width ="100%";

  bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase(); 
  bar.appendChild(colorBar);
}

