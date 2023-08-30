const catalogo = [
    {
    id: 1,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "rtx4060.jpg"
    },
    {
    id: 2,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "rtx4060.jpg"
    },
    {   id: 3,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "rtx4060.jpg"
    },
    {
    id: 4,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "monitor185led.jpg"
    },
    {
    id: 5,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "monitor185led.jpg"
    },
    {
    id: 6,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "monitor185led.jpg"
    },
    {
    id: 7,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "monitor185led.jpg"
    },
    {
    id: 7,
    nome: "Rtx 4060",
    marca: "Gigabyte",
    preco: 1.999,
    nomeArquivoImg: "monitor185led.jpg"
    }
]

for (produto of catalogo) {
const cartaoProduto = `<div class = 'border-solid border-2 border-sky-500 w-64 m-2' id="produto-${produto.id}">
<img src="assets/${produto.nomeArquivoImg}" alt 
alt="Produto Informatica"
style="height: 200px;"/>
<p class= "marcaProduto">${produto.marca}</p>
<p class= "nomeProduto">${produto.nome}</p>
<p class= "precoProduto">R$ ${produto.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}

