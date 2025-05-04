document.addEventListener("DOMContentLoaded", function () {

document.getElementById("register").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const occupation = document.getElementById("occupation").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha");
    const confirma = document.getElementById("confirm");


    const emailValida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (name.length < 3) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (!cpfValido.test(cpf)) {
        alert("CPF inválido. Use o formato 000.000.000-00.");
        return;
    }

    if (occupation.length < 3) {
        alert("Informe uma ocupação válida.");
        return;
    }

    if (!emailValida.test(email)) {
        alert("E-mail inválido.");
        return;
    }

    if (senha.value.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    if (senha.value !== confirma.value) {
        alert("As senhas não coincidem.");
        return;
    }

   
    alert("Cadastro realizado com sucesso!");
});

document.getElementById("cpf").addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = value;
})
});