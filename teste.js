$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#top-image").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 25;
              var newvalueY = height * pageY * -1 - 50;
              $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
    });


const iconeCSS = document.getElementById('css-icon');

//Ativando função ao carregar página
window.onload = ()=>{
    let movementStrength = 25;
    let height = movementStrength / window.innerHeight;
    let width = movementStrength / window.innerWidth;
    home.addEventListener('mousemove', moverIcon);
    function moverIcon(event){;
        let x = event.offsetX - (window.innerWidth / 2);
        let y = event.offsetY - (window.innerHeight / 2);
        let newvalueX = width * x * -1 - 25;
        let newvalueY = height * y * -1 - 50;
        icones.style.top = newvalueY +"px";
        icones.style.left = newvalueX +"px";
    };
}


