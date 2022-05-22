window.onload = (sum) => {
  const bar = document.createElement("div");
  bar.classList.add("progressbar");

  const colorBar = document.createElement("div");
  colorBar.classList.add("colorbar");
  document.body.appendChild(bar);

  let price = 100;
  let carrinho = [12, 36];

  if (carrinho.length > 0) {
    sum = carrinho.reduce((s, i) => {
      return s + i;
    });
  } else {
    sum = 0;
  }

  let result = price - sum.toFixed(2);

  if (sum === 0) {
    bar.textContent =
      `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
    colorBar.style.display = "none";
  }

  if (result === price) {
    bar.innerHTML =
      `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
    colorBar.style.display = "none";
  }

  if (carrinho.length !== 0 && result < price) {
    colorBar.style.width = price - result + "%";
    bar.innerHTML =
      `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

    bar.appendChild(colorBar);
  }

  if (sum === price) {
    colorBar.style.width = result + "%";
    bar.append(colorBar);
    bar.textContent = "Parabéns! O frete é por nossa conta.".toUpperCase();
  }
};
