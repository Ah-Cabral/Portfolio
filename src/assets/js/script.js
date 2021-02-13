let typed = "";
const element = document.querySelector(".typity");

function startType(phrases, index) {
    if (index < phrases.length) {
        typed += phrases.charAt(index);
        element.innerHTML = typed;
        index++;
        setTimeout(function () {
            startType(phrases, index);
        }, 50);
    } else {
        setTimeout(function () {
            element.classList.add("highlight");
        }, 2000);

        setTimeout(function () {
            element.classList.remove("highlight");
            typed = "";
            element.innerHTML = typed;
            startType(getPhrase(), 0);
        }, 2850);
    }
}

function getPhrase() {
    const phrases = ["Olá, meu nome é Arthur Cabral", "desenvolvedor web", "criativo", "líder", "proativo"];
    for(c = 0; c < phrases.length + 1; c++){
        var newPhrase = [phrases[c]];
        return newPhrase[c];
    }
}

startType(getPhrase(), 0);
