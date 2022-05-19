const bar = document.createElement("div");
bar.classList.add("progressbar");

let price = 100
bar.textContent =
  `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase()

document.body.appendChild(bar);

