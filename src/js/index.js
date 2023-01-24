/* 
OBJETIVO 1 - quando o usuário clicar no botão de ver o trailer,
devemos abrir a modal com o vídeo do trailer

OBJETIVO 2 - quando o usuário clicar no X, devemos fechar a modal

OBJETIVO 1 
- passo 1 - dar um jeito de pegar o elemento que representa o
                botão na tela usando o js
- passo 2 - identificar quando o usuário clicar no botão
- passo 3 - pegar o elemento da modal no js
- passo 4 - abrir a modal na tela

OBJETIVO 2
- passo 1 - pegar o elemento de fechar a modal usando o js
- passo 2 - identificar quando o usuário clicar no X
- passo 3 - fechar a modal
        
*/


const botaoTrailer = document.querySelector(".botao-trailer")
const video = document.getElementById("video")
const linkDoVideo = video.src
const modal = document.querySelector(".modal")
const botaoFecharModal = document.querySelector(".fechar-modal")

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
})





botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
})

