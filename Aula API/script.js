const city = document.querySelector('#input_city')
const button = document.querySelector('button')
const result = document.querySelector('#result')


button.addEventListener('click', get_weather)

async function get_weather(){
    const api_key = 'e82252527048047f45c32776acc06ba9'
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${api_key}`

    try {
        const response = await fetch(api_url)
        if(!response.ok)
        {
            throw new error('Cidade não encontrada')
        }
        else{
            const dados = await response.json()
            console.log(dados)
            const temp = dados.main.temp
            const max_temp = dados.main.temp_max
            const min_temp = dados.main.temp_min
            const feels_like = dados.main.feels_like
            const humidity = dados.main.humidity
            
            result.textContent = `Temp: ${temp}°C Max: ${max_temp}°C Min: ${min_temp}°C Sens: ${feels_like}°C Umid: ${humidity}%`
            
            console.log(temp, max_temp, min_temp, feels_like, humidity)
        }
    }
    catch(error){
        console.log('deu ruim')
        console.log(error)
    }
}