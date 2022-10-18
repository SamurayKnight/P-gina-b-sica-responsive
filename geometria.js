(()=>{
    'use strict'

  

//CONSTANTES

    const pi = 3.14
    const perimetroCirculo = document.querySelector("#perimetroCirculo"),
    areaCirculo = document.querySelector("#areaCirculo"),
    perimetroTriangulo = document.querySelector("#perimetroTriangulo"),
    areaTriangulo = document.querySelector("#areaTriangulo"),
    perimetroCuadrado = document.querySelector("#perimetroCuadrado"),
    areaCuadrado = document.querySelector("#areaCuadrado");



      //***********CIRCULO***********



    //Área

    const areaCircle = (radio) => {
    let radioSquare = Math.pow(radio, 2)
    let area = pi * radioSquare
    return area
} 

    areaCirculo.addEventListener('click', ()=> {

    let area = document.getElementById("C")
    let value = area.value
    const result = `El Área de tu circulo es: ${areaCircle(value)} cm^2.`;
    document.getElementById("respuesta").innerText = result;
})




    //Perímetro

    const perimetroCircle = (radio) => (2 * pi) * radio;

    perimetroCirculo.addEventListener('click',()=> {

    let area = document.getElementById("C")
    let value = area.value
    console.log(value)
    const result = `El Perímetro de tu circulo es: ${perimetroCircle(value)} cm.`;
    document.getElementById("respuesta").innerText = result;
});



//***********TRIÁNGULO***********


//Perimetro
const trianglePerimetro = (lado1, lado2, base) => lado1 + lado2 + base;

perimetroTriangulo.addEventListener('click',()=> {

    let lado1 = document.getElementById('inputSide1')
    let lado2 = document.getElementById('inputSide2')
    let lado3 = document.getElementById('inputSide3')

    lado1 = Number(lado1.value)
    lado2 = Number(lado2.value)
    lado3 = Number(lado3.value)

    const resultt = `El Perímetro de tu triángulo es: ${trianglePerimetro(lado1, lado2, lado3)} cm.`;
    document.getElementById("respuesta").innerText = resultt;
})


//Área

const areaTriangle = (base, altura) => (base * altura) / 2;



areaTriangulo.addEventListener('click', () => {

    let altura = document.getElementById('Altura1')
    let base = document.getElementById('base1')

    altura = Number(altura.value)
    base = Number(base.value)

    const resulttt = `El Área de tu triángulo es: ${areaTriangle(base, altura)} cm^2.`;
    document.getElementById("respuesta").innerText = resulttt;

});



//***********CUADRADO***********

//Perímetro

const perimetroSquare = (lado) => lado * 4;

perimetroCuadrado.addEventListener('click', () => {
    let lado = document.querySelector("#ladox");
    lado = Number(lado.value);

    const resulttt = `El Perímetro de tu Cuadrado es: ${perimetroSquare(lado)} cm.`;
    document.getElementById("respuesta").innerText = resulttt;
})


//Área

const squareArea = (side) => side * side ;

areaCuadrado.addEventListener('click', () => {
    let lado = document.getElementById("ladox")
    lado = lado.value;

    const resulttt = `El Área de tu Cuadrado es: ${squareArea(lado)} cm^2.`;
    document.getElementById("respuesta").innerText = resulttt;
})


})();

