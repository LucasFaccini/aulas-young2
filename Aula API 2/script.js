const api_url = 'https://emojihub.yurace.pro/api/random'
const button = document.querySelector('button')
const emoji_span = document.querySelector('.emoji')

button.addEventListener('click', new_emoji)
window.onload = new_emoji

async function new_emoji(){
    const response = await fetch(api_url)
    if (response.ok)
    {
        const dados = await response.json()
        console.log(dados.htmlCode[0])
        emoji_span.innerHTML = dados.htmlCode[0]
    }
}