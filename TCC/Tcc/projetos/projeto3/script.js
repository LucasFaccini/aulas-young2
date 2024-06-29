// Identificar elementos
const nome = document.querySelector('#nome_input')
const n1 = document.getElementById('n1_input')
const n2 = document.getElementById('n2_input')
const n3 = document.getElementById('n3_input')
const botao = document.querySelector('.submit')

//Adicionar eventos
botao.addEventListener('click', salvar_dados)

//Criar função
function salvar_dados()
{
    localStorage.setItem('n1', n1.value)
    localStorage.setItem('n2', n2.value)
    localStorage.setItem('n3', n3.value)
    localStorage.setItem('nome', nome.value)
}