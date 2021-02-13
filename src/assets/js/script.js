// Define global vars
const texts = ['Olá, meu nome é Arthur Cabral...', 'Sou desenvolvedor iniciante...', 'Sou Designer...', 'Sou estudante...'];
var num = 0;
var li = 0;
const h1 = document.querySelector('.typing');

// Main Function
function Type(count){
    let phrase = texts[count];
    let letters = phrase.split(''); // Split the phrase to an array
    letters.forEach((letras, i) => { // forEach loop to insert the letters into H1
        li = i  // define li
        setTimeout(function() {
            h1.innerHTML += letras;
        }, 75 * i);
    });
    setTimeout(function() {
        if(li = letters.length) { 
            if(num === texts.length - 1) { // Validate the num parameter for infinite loop animation
                num = 0
            } else {
                num++ // Increase num value to control what phrase will be returned to Type(val)
            }
            h1.innerHTML = ''; // Clean h1
            Change(num); // Call func
        }
    }, 5000);
};

// Second func call
function Change(val) {
    Type(val)
}

// First func call, start Main func
Type(num)
