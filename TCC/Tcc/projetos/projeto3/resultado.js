const nome = document.querySelector('#nome')
const media = document.querySelector('#media')
const resultado = document.querySelector('#results')

window.onload = function()
{
    const nome_salvo = localStorage.getItem('nome')
    const n1_salvo = parseInt(localStorage.getItem('n1'))
    const n2_salvo = parseInt(localStorage.getItem('n2'))
    const n3_salvo = parseInt(localStorage.getItem('n3'))

    const media1 = (n1_salvo + n2_salvo + n3_salvo) / 3
    const x = media1.toFixed(1)
    let estatus = ''
    
    //verificar se passou
    if (x >= 5)
    {
        estatus =  'Aprovado!'
    }
    else if (x <= 3)
    {
        estatus = 'Reprovado'
    }
    else
    {
        estatus = 'Recuperação'
    }

    //alterar eloementos
    nome.innerHTML = nome_salvo
    media.innerHTML = x
    resultado.innerHTML = estatus
}