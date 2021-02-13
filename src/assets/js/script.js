// Definindo variáveis globais
const texts = ['Olá, meu nome é Arthur Cabral...', 'Sou desenvolvedor iniciante...', 'Sou Designer...', 'Sou estudante...'];
var num = 0;
var li = 0;
const h1 = document.querySelector('.typing');

//Função Type Principal
function Type(count){
    let phrase = texts[count];

    let letters = phrase.split(''); // Utilizando split para separar cada caractere da frase

    letters.forEach((letras, i) => { // Utilizando forEach loop para inserir as letras no H1

        li = i  // Definindo li (index)

        setTimeout(function() {
            h1.innerHTML += letras;
        }, 75 * i);

    });

    setTimeout(function() {

        if(li = letters.length) { 

            if(num === texts.length - 1) { // Validando o parâmetro num para animação de loop infinito   
                num = 0

            } else {
                num++ // Aumentando o valor num para controlar qual frase será retornada ao tipo (val)
            }

            h1.innerHTML = ''; // Limpando H1
            
            Change(num); // Chamando a função
        }
    }, 5000);
};

// Segunda chamada de função
function Change(val) {
    Type(val)
}

// Primeira chamada da função, iniciando função principal
Type(num)
