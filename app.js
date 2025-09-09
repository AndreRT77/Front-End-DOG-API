'use strict'

function barraPesquisa(){

}


function criarImagem() {

}
async function buscarImagens (raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch (url)
    const imagens = await response.json()
    console.log (imagens.message)
    return imagens.message
}
searchInput.addEventListener('input', searchRacas);
displayRacas(racas);