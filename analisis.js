


const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
      return salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero % 2 ===0);
}

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personaMitad = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const sumaLista = lista.reduce(
            function (sumaAcumulada = 0, nuevoElemento){
                return sumaAcumulada + nuevoElemento;
            }
        );
        
        const promedioMediana = sumaLista+lista.length;

        return promedioMediana
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted)

console.log({
    medianaGeneralCol
})


console.log(
    medianaSalariosCol(salariosColSorted)
);