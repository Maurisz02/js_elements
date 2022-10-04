let kedvencek = [
    'Gyűrűk Ura',
    'Harry Potter',
    'Ragyogás',
    'Orion Expressz'
];

function newFav(cim){
    let label = document.createElement('label');
    label.textContent = cim + ': ';
    let number = document.createElement('input');
    number.type="number";
    number.min = 1;
    number.max = 5;
    number.value= 3;
    label.appendChild(number);
    return label;
}

function kedvencBetoltes(){
    let szulo = document.getElementById('lista');
    szulo.textContent = "";
    for(let k of kedvencek){
        let listaElem = document.createElement('li'); 
        //listaElem.textContent = k;
        listaElem.appendChild(newFav(k));
        let torles = document.createElement('button');
        torles.textContent = "X";



        torles.addEventListener('click',()=>{
            listaElem.remove();
        });
        listaElem.appendChild(torles);
        szulo.appendChild(listaElem);
    }
}

function colorize(){
    let szulo = document.getElementById('lista');//csak id
    for(let li of szulo.children){
        let randInt = Math.floor(Math.random() * (2**24));
        li.style.backgroundColor = "#" + randInt.toString(16);
    }

    let inputMezok = document.querySelectorAll('#lista input');//tetszőleges css
    for(let i of inputMezok){
        let randInt = Math.floor(Math.random() * (2**24));
        i.style.backgroundColor = "#" + randInt.toString(16);
    }

    //document.getElementsByClassName('fontos')
    //document.getElementsByTagName()
    //document.getElementsByName()
}


function init(){
document.getElementById('kedvencekGomb').addEventListener('click',kedvencBetoltes);
document.getElementById('colorButton').addEventListener('click',colorize);

}

document.addEventListener('DOMContentLoaded',init);