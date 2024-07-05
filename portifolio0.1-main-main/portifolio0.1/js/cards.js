import { Projeto } from "./projeto.js";

let divs = [];
let projetos =[
    new Projeto('MAÇÃ', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('PERA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('ABACAXI', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('MELÂNCIA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('COCÔ', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('KIWI', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('MANGA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('AMEIXA', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
    new Projeto('ABACATE', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'),
];

let cards_projetos = document.getElementById('cards_projetos');

export function criarCards() {
    cards_projetos.innerHTML = '';
    divs = [];

    for (let i = 0; i < projetos.length; i++) {
        var div = document.createElement('div');

        div.className = 'card';
        divs.push(div);
        cards_projetos.appendChild(div);
    }

    for (let i = 0; i < projetos.length; i++) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var h3 = document.createElement('h3');
        var p = document.createElement('p');
        var btn = document.createElement('button');

        btn.style.width = '5vw';
        btn.style.height = '2vw';
        btn.addEventListener('click', function(){
            removerCard(i);
        });

        img.src = '../assets/img/' + projetos[i].img;
        img.style.width = '5vw';

        h3.textContent = projetos[i].titulo;

        p.textContent = projetos[i].descricao;

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(btn);
        divs[i].appendChild(div);
    }

    let divAdd = document.createElement('div');
    divAdd.className = 'card cardAdd';
    divAdd.addEventListener('click', function(){
        addCard();
    });

    let icon = document.createElement('i');
    icon.className = "fa-solid fa-plus iconeMais";

    divAdd.appendChild(icon);
    cards_projetos.appendChild(divAdd);
}

export function addCard(){
    projetos.push(new Projeto('MAÇÃ', 'Aqui vai a descrição do projeto com informações de linguagem funcionamento e objetivo..', 'img_base.svg'));
    criarCards();
}   

function removerCard(index){
    projetos.splice(index, 1);
    criarCards();
}