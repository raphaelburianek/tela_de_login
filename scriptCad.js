//variaveis que armazena o evento do mostrar senha e do confirmSenha.
let btn = document.querySelector('.verSenha')
let btnConfirm = document.querySelector('.verConfirmSenha')
//variaveis que armazena os dados do campo nome.
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false
//variaveis que armazena os dados do campo usuario.
let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false
//variaveis que armazena os dados do campo senha.
let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false
//variaveis que armazena os dados do campo senha.
let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// validando campo nome.
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 3) {
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.innerHTML = 'Nome'
    labelNome.setAttribute('style', 'color: green')
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

// validando campo usuario.
usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 5) {
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 6 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.innerHTML = 'Usuário'
    labelUsuario.setAttribute('style', 'color: green')
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

// validando campo senha
senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.innerHTML = 'Senha'
    labelSenha.setAttribute('style', 'color: green')
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

// confirmando se as senhas  estão iguais.
confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha * As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    labelConfirmSenha.setAttribute('style', 'color: green')
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})


// validando todos os campos se estão ok 
function cadastrar() {
    if (validNome && validUsuario && validSenha && validConfirmSenha) {
      //faz o cadastro dentro da memoria do navegador.
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
          listaUser.push(
            {
              nomeCad: nome.value,
              userCad: usuario.value,
              senhaCad: senha.value
            }
          )

          localStorage.setItem('listaUser', JSON.stringify(listaUser))
      // mostra uma mensagem que esta tudo ok.
      msgSuccess.setAttribute('style', 'display: block')
      msgSuccess.innerHTML = '<strong>Cadastrado com sucesso!</sttrong>'
      msgError.setAttribute('style', 'display: none')
      msgError.innerHTML = '' 
      //depois de cadastrado muda pra tela de login.
      setTimeout(()=>{
      window.location.href = "./index.html"},3000 
     )

    } else {
      //mostra mensagem de erro caso os dados nao esteja certo
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar.</sttrong>'
      msgSuccess.innerHTML = ''
      msgSuccess.setAttribute('style', 'display: none')
    }

}

//mostra a senha do campo senha.
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

//mostra a senha do campo confirme senha .
btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})
