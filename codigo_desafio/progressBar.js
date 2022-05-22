var url_atual = window.location.href;

if (url_atual !== "http://cro.agencia.pmweb.com.br/cupcakes4/checkout.html") {
  //inserindo uma barra estilizada no topo  da página
  const bar = document.createElement("div");
  bar.classList.add("progressbar");

  //barra de progresso colorida
  const colorBar = document.createElement("div");
  colorBar.classList.add("colorbar");
  document.body.appendChild(bar);

  //variável de preço que começa com 100 (que é a quantia em R$ do frete grátis)
  //antes fiz o steste usando um Array, depois peguei o Elemento
  //que retorna o total do carrinho para fazer os cálculos
  // a variável carrinho começa em zero para não dar erro
  var price = 100;
  var carrinho = 0;
  var total = document.getElementsByClassName("subtotal")[0];
  var valortotal = document.getElementsByClassName("valor-total")[0];

  //se a variável for deferente de undefined (ou seja, se o elemento existe)
  if (total !== undefined && valortotal === undefined) {
    carrinho = parseFloat(total.childNodes[3].outerText.slice(3));
  } else if (valortotal === 0 && total === undefined) {
    carrinho = parseFloat(valortotal.textContent.toString().slice(2));
  } else {
    carrinho = 0;
  }

  // cálculo
  let result = price - parseFloat(carrinho);

  //condicionais para fazer a barra mover!
  if (parseFloat(carrinho) === 0) {
    bar.textContent =
      `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
    colorBar.style.display = "none";
  } else if (result === price) {
    bar.innerHTML =
      `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
    colorBar.style.display = "none";
  } else if (parseFloat(carrinho).length !== 0 && result < price) {
    colorBar.style.width = price - result + "%";
    bar.innerHTML =
      `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

    bar.appendChild(colorBar);
  }

  if (result <= 0) {
    colorBar.style.width = "100%";

    bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
    bar.appendChild(colorBar);
  }

  //acao do btn de comprar
  var btn = document.querySelectorAll(".botao-comprar");
  for (index in btn) {
    var value = btn[index];
    value.id = index;
    var comprar = document.getElementById(value.id);
    //if exists
    if (comprar !== null) {
      comprar.addEventListener("click", () => {
        //para fazer a página atualizar
        if (parseFloat(carrinho) === 0) {
          bar.textContent =
            `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
          colorBar.style.display = "none";
          location.reload();
        } else if (result === price) {
          bar.innerHTML =
            `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
          colorBar.style.display = "none";
          location.reload();
        } else if (parseFloat(carrinho).length !== 0 && result < price) {
          colorBar.style.width = price - result + "%";
          bar.innerHTML =
            `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

          bar.appendChild(colorBar);
          location.reload();
        }
        if (result <= 0) {
          colorBar.style.width = "100%";

          bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
          bar.appendChild(colorBar);
          location.reload();
        }
      });
    }
  }

  //acao dos btns de remover
  var btnRemove = document.querySelectorAll(".remover");
  btnRemove[0].id = "remove";
  btnRemove[1].id = "removeMobile";
  if (btnRemove.length > 2) {
    for (index in btnRemove) {
      var value = btnRemove[index];
      value.id = index;
      var remover = document.getElementById(value.id);

      //if exists
      if (remover !== null) {
        remover.addEventListener("click", () => {
          //para fazer a página atualizar
          if (parseFloat(carrinho) === 0) {
            bar.textContent =
              `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
            colorBar.style.display = "none";
            location.reload();
          } else if (result === price) {
            bar.innerHTML =
              `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
            colorBar.style.display = "none";
            location.reload();
          } else if (parseFloat(carrinho).length !== 0 && result < price) {
            colorBar.style.width = price - result + "%";
            bar.innerHTML =
              `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

            bar.appendChild(colorBar);
            location.reload();
          }
          if (result <= 0) {
            colorBar.style.width = "100%";

            bar.innerHTML =
              "Parabéns! O frete é por nossa conta.".toUpperCase();
            bar.appendChild(colorBar);
            location.reload();
          }
        });
      }
    }
  }

  btnRemove[0].addEventListener("click", () => {
    //para fazer a página atualizar
    if (parseFloat(carrinho) === 0) {
      bar.textContent =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (result === price) {
      bar.innerHTML =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (parseFloat(carrinho).length !== 0 && result < price) {
      colorBar.style.width = price - result + "%";
      bar.innerHTML =
        `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

      bar.appendChild(colorBar);
      location.reload();
    }
    if (result <= 0) {
      colorBar.style.width = "100%";

      bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
      bar.appendChild(colorBar);
      location.reload();
    }
  });
  btnRemove[1].addEventListener("click", () => {
    //para fazer a página atualizar
    if (parseFloat(carrinho) === 0) {
      bar.textContent =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (result === price) {
      bar.innerHTML =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (parseFloat(carrinho).length !== 0 && result < price) {
      colorBar.style.width = price - result + "%";
      bar.innerHTML =
        `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

      bar.appendChild(colorBar);
      location.reload();
    }
    if (result <= 0) {
      colorBar.style.width = "100%";

      bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
      bar.appendChild(colorBar);
      location.reload();
    }
  });

  //acao dos btns de menos
  var btnMenos = document.querySelectorAll(".menos");
  btnMenos[0].id = "menos";
  btnMenos[1].id = "menosMobile";

  if (btnMenos.length > 2) {
    for (index in btnMenos) {
      var value = btnMenos[index];
      value.id = index;
      var menos = document.getElementById(value.id);

      //if exists
      if (menos !== null) {
        menos.addEventListener("click", () => {
          //para fazer a página atualizar
          if (parseFloat(carrinho) === 0) {
            bar.textContent =
              `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
            colorBar.style.display = "none";
            location.reload();
          } else if (result === price) {
            bar.innerHTML =
              `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
            colorBar.style.display = "none";
            location.reload();
          } else if (parseFloat(carrinho).length !== 0 && result < price) {
            colorBar.style.width = price - result + "%";
            bar.innerHTML =
              `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

            bar.appendChild(colorBar);
            location.reload();
          }
          if (result <= 0) {
            colorBar.style.width = "100%";

            bar.innerHTML =
              "Parabéns! O frete é por nossa conta.".toUpperCase();
            bar.appendChild(colorBar);
            location.reload();
          }
        });
      }
    }
  }

  btnMenos[0].addEventListener("click", () => {
    //para fazer a página atualizar
    if (parseFloat(carrinho) === 0) {
      bar.textContent =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (result === price) {
      bar.innerHTML =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (parseFloat(carrinho).length !== 0 && result < price) {
      colorBar.style.width = price - result + "%";
      bar.innerHTML =
        `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

      bar.appendChild(colorBar);
      location.reload();
    }
    if (result <= 0) {
      colorBar.style.width = "100%";

      bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
      bar.appendChild(colorBar);
      location.reload();
    }
  });
  btnMenos[1].addEventListener("click", () => {
    //para fazer a página atualizar
    if (parseFloat(carrinho) === 0) {
      bar.textContent =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (result === price) {
      bar.innerHTML =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (parseFloat(carrinho).length !== 0 && result < price) {
      colorBar.style.width = price - result + "%";
      bar.innerHTML =
        `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

      bar.appendChild(colorBar);
      location.reload();
    }
    if (result <= 0) {
      colorBar.style.width = "100%";

      bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
      bar.appendChild(colorBar);
      location.reload();
    }
  });

  //acao dos btns de mais
  var btnMais = document.querySelectorAll(".mais");
  btnMais[0].id = "mais";
  btnMais[1].id = "maisMobile";

  if (btnMais.length > 2) {
    for (index in btnMais) {
      var value = btnMais[index];
      value.id = index;
      var mais = document.getElementById(value.id);

      //if exists
      if (mais !== null) {
        mais.addEventListener("click", () => {
          //para fazer a página atualizar
          if (parseFloat(carrinho) === 0) {
            bar.textContent =
              `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
            colorBar.style.display = "none";
            location.reload();
          } else if (result === price) {
            bar.innerHTML =
              `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
            colorBar.style.display = "none";
            location.reload();
          } else if (parseFloat(carrinho).length !== 0 && result < price) {
            colorBar.style.width = price - result + "%";
            bar.innerHTML =
              `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

            bar.appendChild(colorBar);
            location.reload();
          }
          if (result <= 0) {
            colorBar.style.width = "100%";

            bar.innerHTML =
              "Parabéns! O frete é por nossa conta.".toUpperCase();
            bar.appendChild(colorBar);
            location.reload();
          }
        });
      }
    }
  }

  btnMais[0].addEventListener("click", () => {
    //para fazer a página atualizar
    if (parseFloat(carrinho) === 0) {
      bar.textContent =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (result === price) {
      bar.innerHTML =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (parseFloat(carrinho).length !== 0 && result < price) {
      colorBar.style.width = price - result + "%";
      bar.innerHTML =
        `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

      bar.appendChild(colorBar);
      location.reload();
    }
    if (result <= 0) {
      colorBar.style.width = "100%";

      bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
      bar.appendChild(colorBar);
      location.reload();
    }
  });
  btnMais[1].addEventListener("click", () => {
    //para fazer a página atualizar
    if (parseFloat(carrinho) === 0) {
      bar.textContent =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (result === price) {
      bar.innerHTML =
        `Faltam mais R$${price} para o frete sair de graça!`.toUpperCase();
      colorBar.style.display = "none";
      location.reload();
    } else if (parseFloat(carrinho).length !== 0 && result < price) {
      colorBar.style.width = price - result + "%";
      bar.innerHTML =
        `Faltam mais R$${result} para o frete sair de graça!`.toUpperCase();

      bar.appendChild(colorBar);
      location.reload();
    }
    if (result <= 0) {
      colorBar.style.width = "100%";

      bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
      bar.appendChild(colorBar);
      location.reload();
    }
  });

  localStorage.setItem("total", result);
}

if (url_atual === "http://cro.agencia.pmweb.com.br/cupcakes4/checkout.html") {
  //inserindo uma barra estilizada no topo  da página
  const bar = document.createElement("div");
  bar.classList.add("progressbar");

  //barra de progresso colorida
  const colorBar = document.createElement("div");
  colorBar.classList.add("colorbar");
  document.body.appendChild(bar);

  let price = 100;
  let totalCheckout = localStorage.getItem("total");
  let result = price - parseFloat(totalCheckout);

  colorBar.style.width = result + "%";
  bar.innerHTML =
    `Faltam mais R$${totalCheckout} para o frete sair de graça!`.toUpperCase();

  bar.appendChild(colorBar);

  if (totalCheckout <= 0) {
    colorBar.style.width = "100%";

    bar.innerHTML = "Parabéns! O frete é por nossa conta.".toUpperCase();
    bar.appendChild(colorBar);
    document.getElementsByClassName("frete")[0].textContent =
      "Você ganhou frete grátis!".toUpperCase();
    document.getElementsByClassName("frete")[0].style.color = `#7A0BAB`;

    document.getElementsByClassName("frete")[0].style.textAlign = "center";
    document.getElementsByClassName("frete")[0].style.padding = "5%";
    document.getElementsByClassName("frete")[0].style.fontWeight = "bold";
  }
}
