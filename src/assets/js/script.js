/*

Definindo Variáveis Globais:

*/

//A array texts será inserida na função type, terá por objetivo separar as frases presentes nela.
const texts = ['Olá, meu nome é Arthur Cabral...', 'Sou desenvolvedor iniciante...', 'Sou Designer...', 'Sou estudante...'];

//A variável num será o índice das frases presente na função
var num = 0;

//A variável li será o índice das letras de cada frase presente no forEach
var li = 0;

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
    letters.forEach((letras, i) => { 

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


const header = document.getElementsByClassName('main-header')[0];
const body = document.getElementsByTagName('body')[0];

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    header.style.background = "#FFB039";
    
    header.style.boxShadow = '19px 45px 43px -38px rgba(0,0,0,0.75)';
    
    header.style.transitionDuration = ".6s"

    link = document.getElementsByClassName("header-main");
    for(c = 0; c < link.size; c++){

        link[c].style.color = 'var(-color-primary)'

        link[c].addEventListener("mouseover", function muda(){
            link[c].style.padding = '.5rem 1.5rem'
            link[c].style.background = '#FFFFFF'
            link[c].style.color = 'var(-color-secondary)'
            link[c].style.borderRadius = '10px'
        })
    
        link[c].addEventListener("mouseout", function volta(){
            link[c].style.padding = '0'
            link[c].style.background = 'none'
            link[c].style.color = 'var(-color-secondary)'
            link[c].style.transitionDuration = ".6s"
        })
    }
    


  } else {
    header.style.background = 'rgba(0, 0, 0, 0.199)';
  }

}
