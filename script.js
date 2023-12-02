// let palabra= prompt("Ingrese una palabra");
const h1Element = document.querySelectorAll('h1');
const frase= 'hola mundo, hola javier, HolA mi amor, hOla Farnaz hola holA hola hoLA';
const palabraReplace0 = frase.replace(/HOLA/gi, 'Adios');
const palabraReplace1 = frase.replace(/hola/g, 'Adios');
const palabraReplace2 = frase.replace(/\s/g, '');
h1Element[0].innerHTML = palabraReplace0;
h1Element[1].innerHTML = palabraReplace1;
h1Element[2].innerHTML = palabraReplace2;

const frase1= "el precio es de $9832478958.87 con un 60%";
const precio = frase1.replace(/\D/g, '');
h1Element[3].innerHTML = precio;
const precio1 = frase1.replace();

const frase2= "foobar foo barfoo foo-bar foo123"; // reemplazar foo por bar
const otroReemplazo2 = frase2.replace(/\bfoo\b/g, 'bar');  // \b es para buscar la palabra exacta
h1Element[4].innerHTML = otroReemplazo2; // barbar bar barbar bar-bar barbar123