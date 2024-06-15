const output_color = document.querySelector('#output-color span')
const output = document.querySelector('#output')
const generate_btn = document.querySelector('#generate')
const copy_btn = document.querySelector('#copy')
const alert_element = document.querySelector('.alert')

window.onload = generate_hexcolor
generate_btn.addEventListener('click', generate_hexcolor)
generate_btn.addEventListener('mousedown', add_grabbing)
generate_btn.addEventListener('mouseup', remove_grabbing)
copy_btn.addEventListener('click', copy_to_clipboard)
copy_btn.addEventListener('mouseup', remove_grabbing)
copy_btn.addEventListener('mousedown', add_grabbing)

function add_grabbing()
{
    generate_btn.classList.add('grabbing')
    copy_btn.classList.add('grabbing')
}
function remove_grabbing()
{
    generate_btn.classList.remove('grabbing')
    copy_btn.classList.remove('grabbing')
}

function generate_hexcolor()
{
    let hex_code = '#'
    for(i = 0; i < 6; i++)
    {
        hex_code += Math.floor(Math.random() * 16).toString(16)
    }
    output.value = hex_code
    output_color.classList.remove('show-color')
    setTimeout(() => output_color.classList.add('show-color'), 10)
    output_color.style.backgroundColor = hex_code
}

function copy_to_clipboard()
{
    navigator.clipboard.writeText(output.value)
    copy_alert()
}

function copy_alert()
{
    alert_element.classList.add('show')
    setTimeout(() => alert_element.classList.remove('show'), 2000)
}