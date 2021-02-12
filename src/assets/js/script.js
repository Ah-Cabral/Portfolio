// function digitaTexto(elemento){

//   const textoArray = elemento.innerText.split('');

//   elemento.innerHTML = '';

//   textoArray.forEach((letra, i) => {
//     setTimeout(() => elemento.innerText += letra, 75 * i);
//   });

//   for(c = 0 ; c < textoArray.length ; c++){
//     setTimeout(() => textoArray.pop(), 75 * c)
//     console.log(textoArray)
//   }
  
// };

// const titulo = document.querySelector('#texto-home');
// digitaTexto(titulo);

const typewriter = document.querySelector("#typewriter");

const sentences = ["Olá, Pedro", "Olá, Arthur", "Olá, Dev", "Olá, Designer","Olá, Tudo"]

function updateText(arrayText) {
  typewriter.innerHTML = "";
  
  let pos = 0;
  let limit = arrayText.length;

    setInterval(() => {
      typewriter.innerHTML = `<h1 id="texto-home">${arrayText[pos]}</h1>`
       pos++
     }, 2000)
  }

updateText(sentences)