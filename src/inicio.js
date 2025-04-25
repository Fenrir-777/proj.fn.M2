function trocarQuiz() {
    const btnTrocar = document.getElementById("btn-trocar-tela");
    btnTrocar.addEventListener("click", () => {
        window.location.href = "quiz.html";
    });
}

trocarQuiz();