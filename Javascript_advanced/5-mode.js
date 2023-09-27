#!/usr/bin/node

function changeMode(size, weight, transform, background, color){
    const my_style = `
    font-size: ` + size + ';' +
    'font_weight: ' + weight + ';' +
    'text-transform: ' + transform + ';' +
    'background-color: ' + background + ';' +
    'color: ' + color + ';';

    const element = document.querySelector('body');

    element.style.cssText = my_style;
}

function main() {
    const spooky = () => changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = () => changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = () => changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
    
    const btn_spooky = document.createElement('button');
    btn_spooky.addEventListener('click', spooky);
    btn_spooky.innerText = 'Spooky';

    const btn_dark = document.createElement('button');
    btn_dark.addEventListener('click', darkMode);
    btn_dark.innerText = 'Dark Mode';

    const btn_Scream = document.createElement('button');
    btn_Scream.addEventListener('click', screamMode);
    btn_spooky.innerText = 'Scream Mode';

    document.body.appendChild(btn_spooky);
    document.body.appendChild(btn_dark);
    document.body.appendChild(btn_Scream);
    
}