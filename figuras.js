/* Cuadrado */
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado*4;
}


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const resultado = document.getElementById("inputRCuadrado");
    resultado.innerText = "El perimetro de tu Cuadrado es " + perimetro;
}


function areaCuadrado(lado){
    return lado * lado;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const resultado = document.getElementById("inputRCuadrado");
    resultado.innerText = "El area de tu Cuadrado es " + area;
}

/* Codigo del Triangulo */

function perimetroTriangulo(l1, l2, base){
    return l1+l2+base;
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTrianguloBase");
    const value = input.value;

    const inputl1 = document.getElementById("inputTrianguloL1")
    const lado1 = inputl1.value;

    const inputl2 = document.getElementById("inputTrianguloL2")
    const lado2 = inputl2.value;    

    const perimetro = perimetroTriangulo(lado1, lado2, value);
    const resultado = document.getElementById("inputRTriangulo");
    resultado.innerText = "El perimetro de tu Triangulo es " + perimetro;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

function calcularAreaTriangulo(){
    const input = document.getElementById("inputTrianguloBase");
    const value = input.value;

    const inputA = document.getElementById("inputTrianguloAltura")
    const alturas = inputA.value;

    const area = areaTriangulo(value, alturas);
    const resultado = document.getElementById("inputRTriangulo");
    resultado.innerText = "El area de tu Triangulo es " + area;
}

function tipodeTriangulo(){
    const input = document.getElementById("inputTrianguloBase");
    const value = input.value;

    const inputl1 = document.getElementById("inputTrianguloL1")
    const lado1 = inputl1.value;

    const inputl2 = document.getElementById("inputTrianguloL2")
    const lado2 = inputl2.value;  

    if(value==lado1&&lado1==lado2){
        const nuevabase = value/2;
        const altura = Math.sqrt(Math.pow(lado1,2) - Math.pow(nuevabase,2));

        const resultado = document.getElementById("inputRTriangulo");
        resultado.innerText = "Tu triangulo es de tipo Equilatero con altura de " + altura;

    }else if(lado1==lado2&&lado2!=value||value==lado1&&lado2!=lado1){
        const nuevolado =  value/2;
        const nuevabase = lado2;

        const altura = Math.sqrt(Math.pow(nuevabase,2) - Math.pow(nuevolado,2));

        const resultado = document.getElementById("inputRTriangulo");
        resultado.innerText = "Tu triangulo es de tipo Isoceles con altura de " + altura;

    }else{
        const resultado = document.getElementById("inputRTriangulo");
        resultado.innerText = "Tu triangulo es de tipo Escaleno";
    }
}

/*Codigo del Circulo*/
const pi = Math.PI;
function diametro(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametroCirculo = diametro(radio);
    return diametroCirculo * pi;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    const resultado = document.getElementById("inputRCirculo");
    resultado.innerText = "La circunferencia es de: " + perimetro;
}

function areaCirculo(radio){
    return (radio*radio) * pi;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    const resultado = document.getElementById("inputRCirculo");
    resultado.innerText = "El area del circulo es de: " + area;
}

/* Descuentos en Compras*/
function comprasDescuentos(precio,descuento){
    const descuentos = (descuento*precio)/100;
    return precio-descuentos;

}

function calcularelPrecio(){
    const input = document.getElementById("inputPrecio");
    const precios = input.value;

    const inputDes = document.getElementById("inputDescuento");
    const descuentos = inputDes.value;

    const precioTotal = comprasDescuentos(precios,descuentos);
    const result = document.getElementById("inputTotal");
    result.innerText = "Tu precio total es $ " + precioTotal; 
}

/* Media Aritmetica */

const lista = [6,4,8];

const sumaLista = lista.reduce(
    function (sumaAcumulada = 0, nuevoElemento){
        return sumaAcumulada + nuevoElemento;
    }
);

const promedioLista = sumaLista/lista.length;

console.log(promedioLista)