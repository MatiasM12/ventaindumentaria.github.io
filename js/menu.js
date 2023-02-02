$(document).ready(main);

function main(){
    menu();
}

var contador = 1;

function menu(){
    document.querySelector(".bars-menu").addEventListener("click", animarMenu);

    $('#bars-menu').click(function(){
        if(contador==1){
            $('nav').animate({
                left:'0'
            });
            contador=0;
        }else{
            $('nav').animate({
                left:'-100%'
            });
            contador=1;
        }
    });
}

var linea1 = document.querySelector(".line1__bars-menu");
var linea2 = document.querySelector(".line2__bars-menu");
var linea3 = document.querySelector(".line3__bars-menu");

function animarMenu(){
    linea1.classList.toggle("activeline1__bars-menu");
    linea2.classList.toggle("activeline2__bars-menu");
    linea3.classList.toggle("activeline3__bars-menu");
}