const produtos_url = 'https://merigold-potions.herokuapp.com/potions'
fetch(
  produtos_url,
  {method:'GET',},
).then(function(resposta){
  return resposta.json()
}).then(function(dados){
  listarPocoes(dados.content)
})

function listarPocoes(pocoes){
  let i = 0
  let nlinha = 2
  let nProduto = 5
  let nClique = 5
  for(let pocao of pocoes){ 
    nProduto++
    nClique++
    let produto = document.createElement('div')
    produto.className = "produto container  col-sm-3"
    if ((i % 3) == 0)
    {
      nlinha++
      let linha = document.createElement('div')
      linha.className = "row mt-2 linha_" + nlinha
      document.getElementById('pocoes').append(linha)
    }
    else
    {
      produto.classList.add('ml-3')
    }
    
    document.getElementsByClassName('linha_' + nlinha)[0].append(produto)

    let clique = document.createElement('div')
    clique.className = "clique"
    clique.setAttribute("onclick",`prodDetails(${i})`)
    document.getElementsByClassName('produto')[nProduto].append(clique)

    let imagem = document.createElement('img')
    imagem.id = `imagem_${i}`
    imagem.width = "100"
    imagem.src = pocao.img
    document.getElementsByClassName('clique')[nClique].append(imagem)

    let nome = document.createElement('h5')
    nome.id = `nome_${i}`
    nome.textContent = pocao.name
    document.getElementsByClassName('clique')[nClique].append(nome)

    let descricao = document.createElement('p')
    descricao.id = `desc_${i}`
    descricao.textContent = pocao.description
    document.getElementsByClassName('clique')[nClique].append(descricao)

    let preco = document.createElement('h6')
    preco.id = `preco_${i}`
    preco.textContent = `R$${Math.floor(Math.random()*300) + 100},00` 
    document.getElementsByClassName('clique')[nClique].append(preco)

    let invisivel = document.createElement('div')
    invisivel.className = "invisivel"
    document.getElementsByClassName('clique')[nClique].append(invisivel)

    let fabricante = document.createElement('span')
    fabricante.id = `fabric_${i}`
    fabricante.textContent = "Anonymous Witches Corp"
    document.getElementsByClassName("invisivel")[0].append(fabricante)

    let peso = document.createElement('span')
    peso.id = `peso_${i}`
    peso.textContent = `${Math.floor(Math.random()*500) + 50} ml` 
    document.getElementsByClassName("invisivel")[0].append(peso)

    let cor = document.createElement('span')
    cor.id = `cor_${i}`
    cor.textContent = "Sortida"
    document.getElementsByClassName("invisivel")[0].append(cor)

    let botao = document.createElement('button')
    botao.type = "button"
    botao.className = "btn  btncomprar"
    botao.setAttribute('data-toggle', 'modal')
    botao.setAttribute('data-target', ".modal_compra")
    botao.textContent = "Comprar"
    document.getElementsByClassName('produto')[nProduto].append(botao)


    i++;
  }
}


function prodDetails(produto) {
    let nome, descricao, preco, fabricante, peso, cor, imagem
    nome = document.getElementById('nome_'+produto).innerText
    descricao = document.getElementById('desc_' + produto).innerText
    preco = document.getElementById('preco_' + produto).innerText
    fabricante = document.getElementById('fabric_' + produto).innerText
    peso = document.getElementById('peso_'+produto).innerText
    cor = document.getElementById('cor_'+produto).innerText
    imagem = document.getElementById('imagem_'+produto).src
  

    localStorage.setItem('nome', nome)
    localStorage.setItem('descricao', descricao)
    localStorage.setItem('preco', preco)
    localStorage.setItem('fabricante', fabricante)
    localStorage.setItem('peso', peso)
    localStorage.setItem('cor', cor)
    localStorage.setItem('imagem', imagem)
    window.location.href = "details.html"

    var item = {nome, preco}
    adicionarCarrinho(item)
    
}

function pagDetalhes() {


    document.getElementById('titulo_produto').innerText = localStorage.nome
    document.getElementById('desc_produto').innerText = localStorage.descricao
    document.getElementById('preco_produto').innerText = localStorage.preco
    document.getElementById('nome_produto').innerText = localStorage.nome
    document.getElementById('fabricante_produto').innerText = localStorage.fabricante
    document.getElementById('peso_produto').innerText = localStorage.peso
    document.getElementById('cor_produto').innerText = localStorage.cor
    document.getElementById('imagem_produto').src = localStorage.imagem

}




