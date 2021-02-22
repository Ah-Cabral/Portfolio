/*

Definindo Variáveis Globais:

*/

//A array texts será inserida na função type, terá por objetivo separar as frases presentes nela.
const texts = ['Olá, Meu Nome é Arthur Cabral...', 'Sou Desenvolvedor Iniciante...', 'Sou Designer...', 'Sou Estudante...'];

//A variável num será o índice das frases presente na função
let num = 0;

//A variável li será o índice das letras de cada frase presente no forEach
let li = 0;

//A constante h1 será o H1 presente no documento HTML
const h1 = document.querySelector('.typing');

/*

    Função Type Principal:
    Essa função irá separar cada frase da array e cada letra de cada
    frase, após isso, irá escrever letra por letra dentro do elemento HTML.

*/

function Type(count){

    // Utilizando count para separar cada frase da array
    let phrase = texts[count];

    // Utilizando split para separar cada caractere da frase
    let letters = phrase.split(''); 

    // Utilizando forEach loop para inserir as letras no H1
    letters.forEach((letras, i) =>{ 

        // Definindo li (index)
        li = i  

        // Utilizando setTimeout para determinar tempo de cada ação * i (quantidade de letras)
        setTimeout(function() {
            h1.innerHTML += letras;
        }, 75 * i);

    });

    /*

        A Função Verificar irá utilizar if's para fazer a verificação de

    */

    setTimeout(function verificarLength() {

        if(li = letters.length) { 

            // Validando o parâmetro num para animação de loop infinito
            if(num === texts.length - 1) {    
                num = 0

            } else {
                // Aumentando o valor num para controlar qual frase será retornada ao tipo (val)
                num++ 
            }

            // Limpando H1
            h1.innerHTML = ''; 

            // Chamando a função change()
            Change(num); 
        }
    }, 5000);
};

/*

    A função change() irá chamar a função Type dentro dela mesma, retornando ao início
    e fazendo com que o efeito de type seja infinito.

*/

function Change(val) {
    Type(val);
};

// Primeira chamada da função, iniciando função principal
Type(num);

//Definindo constantes Globais Para função de Scroll
const header = document.getElementsByClassName('main-header')[0];
const body = document.getElementsByTagName('body')[0];

//Ativando função scroll ao rolar a página
window.onscroll = function() {scrollFunction()};

/*

A função Scroll irá verificar a distância do body ao scroll top e com isso
fará modificações no background, adicionará uma sombra e setará um tempo de 0.6s para isso acontecer

*/

function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    header.style.background = "#FFB039";
    
    header.style.boxShadow = '19px 45px 43px -38px rgba(0,0,0,0.75)';
    
    header.style.transitionDuration = ".6s";

  } else {
    header.style.background = 'rgba(0, 0, 0, 0.199)';
  };

};

//Declarando Constante dos ícones.
const icones = document.querySelector('#icons-move');

//Declarando Constante referente à Home Section
const home = document.querySelector('#home-section');

//Declarando variável referente à força do movimento dos ícobes.
let movementStrength = 85;

//Declarando variável altura.
let height = movementStrength / window.innerHeight;

//Declarando variável largura.
let width = movementStrength / window.innerWidth;

//Fazendo a home ouvir o evento de mouvemove, e iniciar a função moverIcon.
home.addEventListener('mousemove', moverIcon);

/*

Criação da função Mover Icon, que irá fazer o cálculo de x e y,
e atribuir ao valor do posicionamento dos ícones.

*/

function moverIcon(event){;

    let x = event.offsetX - (window.innerWidth / 2);

    let y = event.offsetY - (window.innerHeight / 2);

    let newvalueX = width * x * -1 + 15;
    
    let newvalueY = height * y * -1 - 10;
    
    icones.style.top = newvalueY +"px";
    
    icones.style.left = newvalueX +"px";
    
};

