const form = document.getElementById('loginForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');

function validarNome() {
    const nome = nomeInput.value.trim();
    const nomeError = document.getElementById('nomeError');
    const nomeValid = document.getElementById('nomeValid');

    if (nome === '') {
        nomeInput.style.borderColor = 'red';
        nomeError.style.display = 'block';
        nomeValid.style.display = 'none';
        return false;
    } else {
        nomeInput.style.borderColor = 'green';
        nomeError.style.display = 'none';
        nomeValid.style.display = 'block';
        return true;
    }
}

function validarEmail() {
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    const emailValid = document.getElementById('emailValid');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        emailInput.style.borderColor = 'red';
        emailError.style.display = 'block';
        emailValid.style.display = 'none';
        return false;
    } else {
        emailInput.style.borderColor = 'green';
        emailError.style.display = 'none';
        emailValid.style.display = 'block';
        return true;
    }
}

function atualizarSubmitBtn() {
    if (validarNome() && validarEmail()) {
        submitBtn.classList.add('enabled');
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove('enabled');
        submitBtn.disabled = true;
    }
}

nomeInput.addEventListener('input', atualizarSubmitBtn);
emailInput.addEventListener('input', atualizarSubmitBtn);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validarNome() && validarEmail()) {
        alert('Login realizado com sucesso!');
        // Redireciona para o dashboard
        window.location.href = 'dashboard.html';
    }
});
