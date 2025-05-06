function nomeUsuario(){
    const nome = document.getElementById("nome");
    let nomeUsuario = prompt("Digite seu nome:");
    nome.innerText = `Seja bem vindo ${nomeUsuario}!!!`
}
nomeUsuario();

function trocarQuiz() {
    const btnTrocar = document.getElementById("btn-trocar-tela");
    btnTrocar.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
}
trocarQuiz();