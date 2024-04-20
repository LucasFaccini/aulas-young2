let hora = window.prompt('Insira o horário desejado')
let texto = document.getElementsByTagName('h1')
let saud = document.getElementById('bomdia')
let magem = document.getElementById('imag')

texto[0].innerText = `Agora são ${hora} horas`

if (hora > 0 && hora < 5)
{
    saud.innerText = 'Bom noite'
    window.document.body.style.backgroundColor = 'black'
    magem.src = 'https://st2.depositphotos.com/2627021/8523/i/450/depositphotos_85236464-stock-photo-romantic-moon-in-starry-night.jpg'
}
if (hora >= 5 && hora < 12)
{
    saud.innerText = 'Bom dia'
    window.document.body.style.backgroundColor = 'blue'
    magem.src = 'https://media.istockphoto.com/id/491701259/pt/foto/c%C3%A9u-azul-com-sol.jpg?s=612x612&w=0&k=20&c=RCRVeEg12zAf5zt_-gIjjJyiadxuP0-ulBEMT3ggaxM='
}
if (hora > 11 && hora < 18)
{
    saud.innerText = 'Boa Tarde'
    window.document.body.style.backgroundColor = 'orange'
    magem.src = 'https://vidasimples.co/wp-content/uploads/2020/09/diego-ph-vTitvl4O2kE-unsplash-300x200.jpg'
}
if (hora > 17 && hora <= 24)
{
    saud.innerText = 'Boa noite'
    window.document.body.style.backgroundColor = 'black'
    magem.src = 'https://st2.depositphotos.com/2627021/8523/i/450/depositphotos_85236464-stock-photo-romantic-moon-in-starry-night.jpg'
}

