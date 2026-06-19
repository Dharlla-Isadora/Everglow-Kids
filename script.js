// pega carrinho salvo
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// adicionar produto
function adicionarCarrinho(nome, preco, imagem){

  const produto = {
    nome,
    preco,
    imagem
  };

  carrinho.push(produto);

  // salva no navegador
  localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );

  alert("Produto adicionado ao carrinho 🛒");
}

// mostrar carrinho
function mostrarCarrinho(){

  const lista = document.getElementById("lista-carrinho");

  const totalElemento =
    document.getElementById("total");

  // se não existir, para
  if(!lista) return;

  let total = 0;

  carrinho.forEach((produto, index) => {

  total += produto.preco;

  lista.innerHTML += `

    <div class="item-carrinho">

      <img src="${produto.imagem}">

      <div class="info-carrinho">

        <h3>${produto.nome}</h3>

        <p>R$ ${produto.preco}</p>

        <button onclick="removerCarrinho(${index})">
          Remover
        </button>

      </div>

    </div>

  `;

});

  totalElemento.innerHTML =
    `Total: R$ ${total.toFixed(2)}`;
}

mostrarCarrinho();

// remover produto
function removerCarrinho(index){

  carrinho.splice(index, 1);

  localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );

  location.reload();
}

// CADASTRO

function cadastrar(){

    const nome =
    document.getElementById("nome").value;

    const email =
    document.getElementById("email").value;

    const senha =
    document.getElementById("senha").value;

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    alert("Cadastro realizado com sucesso! 🎉");

    window.location.href = "login.html";
}

// LOGIN

function login(){

    const email =
    document.getElementById("loginEmail").value;

    const senha =
    document.getElementById("loginSenha").value;

    const usuario =
    JSON.parse(localStorage.getItem("usuario"));

    if(
        usuario &&
        usuario.email === email &&
        usuario.senha === senha
    ){

        alert("Login realizado com sucesso! 🎉");

        window.location.href = "index.html";

    }else{

        alert("E-mail ou senha incorretos!");

    }

}
-
function pesquisarProdutos() {

    let pesquisa = document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    let produtos = document
        .getElementsByClassName("product-card");

    for(let i = 0; i < produtos.length; i++) {

        let nomeProduto = produtos[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if(nomeProduto.indexOf(pesquisa) > -1) {
            produtos[i].style.display = "";
        } else {
            produtos[i].style.display = "none";
        }

    }

}