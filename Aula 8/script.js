
const divs = document.getElementsByTagName('div')
const div = document.getElementById('area')
const div_class = document.getElementsByClassName('area')
let contador_click = 0

console.log(divs)
console.log(div)
console.log(div_class)

div.style.backgroundColor = 'grey'


for(var i = 0; i < divs.length; i++)
{
    div_class[i].style.backgroundColor = 'grey'
    divs[i].innerText = 'Robson'
    //div[i].addEventListener('click', clicar2)
}


// div.addEventListener('click', clicar)
// div.addEventListener('mouseenter', entrar)
div.addEventListener('mousedown', sair)
div.addEventListener('mouseup', clicado)

function a()
{
    div.style.backgroundColor = 'green'
    div.innerText = 'Fui clicado'
}
function clicar()
{
    div.innerText = 'Fui clicado'
}

function entrar()
{
    div.innerText = 'ola'
}

function a()
{
    div.innerText = 'caguei'
}

function sair(){
    div.style.backgroundColor= 'blue'
}
function clicado(){
    div.style.backgroundColor= 'green'
    contador_click++
    if(contador_click == 5)
    {
        div.remove()
    }
}