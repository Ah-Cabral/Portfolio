function digitaTexto(elemento){
    const textoArray = elemento.innerText.split('');

    

    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerText += letra, 75 * i);
    });

};

const titulo = document.querySelector('h1');
digitaTexto(titulo);

