/* Script menu lateral */

let hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function (){
    document.querySelector(".container").classList.toggle("show-menu")
})

function alertFormulario () {
    alert("Mensagem enviada com sucesso!")
}