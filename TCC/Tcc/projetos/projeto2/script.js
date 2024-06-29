const senha_elemento = document.getElementById('senha')
const copiar_elemento = document.getElementById('copiar')
const tamanho_elemento = document.getElementById('tamanho')
const maiusculas_elemento = document.getElementById('maiusculas')
const minusculas_elemento = document.getElementById('minusculas')
const numeros_elemento = document.getElementById('numeros')
const caracteres_especiais = document.getElementById('caracteres-especiais')
const gerar_senha_btn = document.querySelector('.submit')
const limpar_btn = document.querySelector('.reset')


const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const caracteres = '!@#$%&*()^~<>][/?|+=-_;:ç'


gerar_senha_btn.addEventListener('click', gerar_senha)
copiar_elemento.addEventListener('click', copiar)
limpar_btn.addEventListener('click', att_pgn)

function att_pgn()
{
    location.reload()
}

function copiar()
{
    const area_texto = document.createElement('textarea')
    const pw = senha_elemento.innerText

    if (!pw) {
        return
    }

    area_texto.value = pw
    document.body.appendChild(area_texto)
    area_texto.select()
    document.execCommand('copy')
    area_texto.remove()
    window.alert('Senha copiada com sucesso!!!')
}

function gerar_senha()
{
    let tamanho_senha = tamanho_elemento.value

    if(!tamanho_senha || tamanho_senha < 6)
    {
        tamanho_senha = 6
    }
    else if (tamanho_senha > 18)
    {
        tamanho_senha = 18
    }

    let = senha = ''
    for (let i = senha.length; i < tamanho_senha; i++)
    {
        const letra_sort = mix_senha()
        senha += letra_sort
    }
    senha_elemento.innerText = senha

}

function mix_senha()
{
    const lista = []
    if(maiusculas_elemento.checked)  
    {
        let sort = maiusculas[Math.floor(Math.random() * maiusculas.length)]
        lista.push(sort)
    }
    if(minusculas_elemento.checked)  
    {
        let sort = minusculas[Math.floor(Math.random() * minusculas.length)]
        lista.push(sort)
    }
    if(numeros_elemento.checked)  
    {
        let sort = numeros[Math.floor(Math.random() * numeros.length)]
        lista.push(sort)
    }
    if(caracteres_especiais.checked)  
    {
        let sort = caracteres[Math.floor(Math.random() * caracteres.length)]
        lista.push(sort)
    }
    if (lista.length === 0)
    {
        return ''
    }
    return lista[Math.floor(Math.random() * lista.length)]
}