const produtos = document.getElementById("produtos");

function criarProduto(
nome,
preco,
foto,
checkout
){

produtos.innerHTML += `
<div class="card">

<img src="${foto}">

<div class="card-info">

<h3>${nome}</h3>

<p class="preco">
R$ ${preco}
</p>

<button
class="btn"
onclick="window.location.href='${checkout}'"
>
COMPRAR
</button>

</div>
</div>
`;

}

criarProduto(
"Netflix Premium",
"19,90",
"https://via.placeholder.com/400",
"https://cakto.com"
);
