const poke_name = document.querySelector('.poke_name')
const poke_number = document.querySelector('.poke_number')
const poke_img = document.querySelector('.poke_img')
const container_input = document.querySelector('.container_input')
const input = document.querySelector('.input_search')
const prev_button = document.querySelector('.pre_btn')
const next_button = document.querySelector('.next_btn')

let id_pokemon = 1

const show_pokemon = async (pokemon) =>{
    poke_name.innerHTML = 'Loading...'
    poke_number.innerHTML = ''
    const json_pokemon = await fetch_pokemon(pokemon)

    if (json_pokemon){
        //poke_img.src = json_pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        poke_img.src = json_pokemon['sprites']['other']['showdown']['front_default']
        poke_img.style.display = 'block'
        poke_name.innerHTML = json_pokemon.name
        poke_number.innerHTML = json_pokemon.id
        input.value = ''
        id_pokemon = json_pokemon.id
    }
    else{
        poke_name.innerHTML = 'Not Founded'
        poke_number.innerHTML = ''
        poke_img.innerHTML = 'none'
    }
}


const fetch_pokemon = async (pokemon) => {
    let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (resposta.status === 200)
    {
        const info = resposta.json()
        return info
    }
}

container_input.addEventListener('submit', (event) =>{
    event.preventDefault()
    let pokemon = input.value.toLoweCase()
    show_pokemon(pokemon)
})

prev_button.addEventListener('click', () => {
    if(id_pokemon > 1)
    {
        id_pokemon -= 1
        show_pokemon(id_pokemon)
    }
})

next_button.addEventListener('click', () => {
    if(id_pokemon <= 920)
    {
        id_pokemon += 1
        show_pokemon(id_pokemon)
    }
})

window.onload = show_pokemon(id_pokemon)