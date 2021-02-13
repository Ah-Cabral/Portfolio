function Type(){
    const texts = ['Olá, meu nome é Arthur Cabral', 'Sou desenvolvedor iniciante', 'Sou Designer', "Sou estudante"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function typing(){
        if(count === texts.length){
            count = 0;
        };
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        document.querySelector('.typing').textContent = letter;
        if(letter.length === currentText.length){
            count++;
        };
        
    }());
};

Type();



