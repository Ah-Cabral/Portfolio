const texts = ['Olá, meu nome é Arthur Cabral...', 'Sou desenvolvedor iniciante...', 'Sou Designer...', 'Sou estudante...'];
function Type(count){
    let phrase = texts[count];
    let letters = phrase.split('');
    let h1 = document.querySelector('.typing');
    letters.forEach((letras, i) => {
        setTimeout(function() {
            h1.innerHTML += letras;
            console.log(letters.length)
        }, 100 * i);
    });


    
};

Type(0)

