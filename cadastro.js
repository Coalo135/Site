const form = document.getElementById('cadastroForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
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
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!regex.test(email)) {
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

function validarSenha() {
    const senha = senhaInput.value.trim();
    const senhaError = document.getElementById('senhaError');
    const senhaValid = document.getElementById('senhaValid');

    if (senha.length < 6) {
        senhaInput.style.borderColor = 'red';
        senhaError.style.display = 'block';
        senhaValid.style.display = 'none';
        return false;
    } else {
        senhaInput.style.borderColor = 'green';
        senhaError.style.display = 'none';
        senhaValid.style.display = 'block';
        return true;
    }
}

function atualizarSubmitBtn() {
    if (validarNome() && validarEmail() && validarSenha()) {
        submitBtn.classList.add('enabled');
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove('enabled');
        submitBtn.disabled = true;
    }
}

nomeInput.addEventListener('input', atualizarSubmitBtn);
emailInput.addEventListener('input', atualizarSubmitBtn);
senhaInput.addEventListener('input', atualizarSubmitBtn);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validarNome() && validarEmail() && validarSenha()) {
        alert('Usuário cadastrado com sucesso!');
        form.reset();
        atualizarSubmitBtn();
    }
});
