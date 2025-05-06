function nomePagina() {
    const nome=
    document.getElementByld("nome");
    let nomeUsuario=
    prompt("Digite seu nome");
    nome.innerText= `Seja bem vindo ${nomeUsuario}`;
}
nomePagina()


function trocarQuiz() {
    const btnTrocar = document.getElementById("btn-trocar-tela");
    btnTrocar.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
}

trocarQuiz();