function enviarEmail (){
    const email = document.getElementById("email").value;

    if (!email || !email.includes('@')) {
        alert("Digite um e-mail válido.");
        return;
      }

      alert("Se este e-mail estiver cadastrado, enviaremos instruções para recuperar sua senha.");
    }