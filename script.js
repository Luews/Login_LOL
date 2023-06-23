// aqui eu puxei os inputs do nosso html 
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button')

// aqui é para detectar quando a gente selecionar o input, não de forma target, por isso entre chaves como parâmetro, para informar que não é em forma de target
const handleFocus = ({ target }) => {
    //aqui é um elemento anterior ao span, que no caso seria o span
    const span = target.previousElementSibling;
    //aqui é para ADCIONAR UMA CLASSE NO ELEMENTO SPAN, e voalá, viola, sei laporra
    span.classList.add('span-active');

}

//aqui vai ser a mesma coisa só que ao contrário, pelo próprio nome diz, desfocar, desclicar, etc
const handleFocusOut = ({ target }) =>{

    if (target.value == ''){
        
        const span = target.previousElementSibling;
        span.classList.remove('span-active');

    }
    
}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.removeAttribute ('disabled')
    }else{
        button.setAttribute('disabled', '');

    }

}

// a cada input focado, adicionar um span-active
inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

// agora vou fazer uma função para o nosso botão de login, ele habilitado e desabilitado, enable e disable
inputs.forEach((input) => input.addEventListener('input', handleChange));

