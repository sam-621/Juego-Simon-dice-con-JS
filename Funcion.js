const button = document.getElementById('button_start');
const button_container = document.getElementById('btn_container');
const button_easy = document.getElementById('button_easy');
const button_hard = document.getElementById('button_hard');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const purple = document.getElementById('purple');
var h1 = document.getElementById('h1');
var maxLevel = 10;
var level = 1;
var arraySequence;
var sublevel = 0;
var band;
var status = 0;

function easyMode(){
    window.status = 1;
    h1.innerHTML = 'Fácil';
}

function hardMode(){
    window.status = 2;
    h1.innerHTML = 'Difícil';
}

//principal function
function Play(){
    //easy
    if(status == 1){
        
        button_easy.classList.add('hide');
        button_hard.classList.add('hide');
        button_container.classList.remove('Button_container');
        var father = button.parentNode;
        father.removeChild(button);
        button_container.classList.add('hide');
        h1.innerHTML = 'Nivel: ' + level;
        arraySequence = new Array(maxLevel).fill(0).map(sequence => Math.floor(Math.random() * 4));
        
        for(let i=0; i<level; i++){
            setTimeout(() => iluminateSequence(i), 1000 * i);
        }

        addEventsOnClickEasy();
        //hard
    } else if(status == 2){

        button_easy.classList.add('hide');
        button_hard.classList.add('hide');
        button_container.classList.remove('Button_container');
        var father = button.parentNode;
        father.removeChild(button);
        button_container.classList.add('hide');
        h1.innerHTML = 'Nivel: ' + level;
        arraySequence = new Array(maxLevel).fill(0).map(sequence => Math.floor(Math.random() * 4));

        for(let i=0; i<level; i++){
            setTimeout(() => iluminateSequence(i), 1000 * i);
        }

        addEventsOnClickHard();
    } else{
        alert('Especifique el nivel')
    }
}

function iluminateSequence(i) {
    
    var value = arraySequence[i];

    switch(value){
        case 0:
            red.classList.add('ligth');
            setTimeout(function off() {red.classList.remove('ligth')}, 350)
            break;
        case 1:
            blue.classList.add('ligth');
            setTimeout(function off() {blue.classList.remove('ligth')}, 350)
            break;
        case 2:
            green.classList.add('ligth');
            setTimeout(function off() {green.classList.remove('ligth')}, 350)
            break;
        case 3:
            purple.classList.add('ligth');
            setTimeout(function off() {purple.classList.remove('ligth')}, 350)
            break;
    }

}

//iluminate only the color that is clicked not all the sequence
function iluminateColor(colorClicked){
    switch(colorClicked){
        case 'red':
            red.classList.add('ligth');
            setTimeout(function off() {red.classList.remove('ligth')}, 100)
            break;
        case 'blue':
            blue.classList.add('ligth');
            setTimeout(function off() {blue.classList.remove('ligth')}, 100)
            break;
        case 'green':
            green.classList.add('ligth');
            setTimeout(function off() {green.classList.remove('ligth')}, 100)
            break;
        case 'purple':
            purple.classList.add('ligth');
            setTimeout(function off() {purple.classList.remove('ligth')}, 100)
            break;
    }
}


function addEventsOnClickEasy(){

    red.addEventListener('click', rulesGameEasy);
    blue.addEventListener('click', rulesGameEasy);
    green.addEventListener('click', rulesGameEasy);
    purple.addEventListener('click', rulesGameEasy);
}



function rulesGameEasy(ev) {

    const colorClicked = ev.target.dataset.color
    iluminateColor(colorClicked);
    var colorNumber = colosIntoNumbers(colorClicked); 

    /*sublevel represents the position of the number in the array and also
    verify if the color clicked is the correct one*/
    if(colorNumber === arraySequence[sublevel]){
        sublevel++
        band = 1;
    } else{
        alert('Perdió :(');
        location.reload();
    }
    //band is to control wich code is running and wich not
    if(band === 1){

        if(sublevel === level){
            level++
            if(level === maxLevel + 1){
                alert('Has ganado!!! toma un ss y compártelo');
                location.reload();
            } else{
                //When you pass to the next level this happens
                band = 0;
                sublevel = 0;
                setTimeout(function nextSequence (){
                    for(let i=0; i<level; i++){
                        setTimeout(() => iluminateSequence(i), 1000 * i);
                    }
                }, 1000);
                h1.innerHTML = 'Nivel: ' + level;
            }
        }
    }
}

function colosIntoNumbers(colorClicked) {
    switch(colorClicked){
        case 'red': return 0;
        case 'blue': return 1;
        case 'green': return 2;
        case 'purple': return 3;
    }
}

//When de level is hard
function addEventsOnClickHard() {
    red.addEventListener('click', rulesGameHard);
    blue.addEventListener('click', rulesGameHard);
    green.addEventListener('click', rulesGameHard);
    purple.addEventListener('click', rulesGameHard);
} 

function rulesGameHard(ev) {
    const colorClicked = ev.target.dataset.color
    iluminateColor(colorClicked);
    var colorNumber = colosIntoNumbers(colorClicked); 

    /*sublevel represents the position of the number in the array and also
    verify if the color clicked is the correct one*/
    if(colorNumber === arraySequence[sublevel]){
        sublevel++
        band = 1;
    } else{
        alert('Perdió :(');
        location.reload();
    }
    //band is to control wich code is running and wich not
    if(band === 1){

        if(sublevel === level){
            level++
            if(level === maxLevel + 1){
                alert('Has ganado!!! toma un ss y compártelo');
                location.reload();
            } else{
                //When you pass to the next level this happens
                band = 0;
                sublevel = 0;
                //this is de diference
                arraySequence = new Array(maxLevel).fill(0).map(sequence => Math.floor(Math.random() * 4));
                setTimeout(function nextSequence (){
                    for(let i=0; i<level; i++){
                        setTimeout(() => iluminateSequence(i), 1000 * i);
                    }
                }, 1000);
                h1.innerHTML = 'Nivel: ' + level;
            }
        }
    }
}


