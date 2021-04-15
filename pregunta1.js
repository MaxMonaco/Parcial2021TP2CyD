/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */

const even = function(numbers){
    let listaPares = [];
    for(let i=0;i<numbers.length;i++){
        let resultado= numbers[i]%2;
        if(resultado==0){
            listaPares.push(numbers[i]);
        }
    }
    console.log(listaPares)
    return listaPares;
}

const odd = function(numbers){
    let listaImpares =[];
    for(let i=0;i<numbers.length;i++){
        let resultado= numbers[i]%2;
        if(resultado!=0){
            listaImpares.push(numbers[i]);

        }
    }
    console.log(listaImpares)
    return listaImpares;

}

// TESTS (no modificar)
const arrEqual = (a1,a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4,2,6,1,0,2,5]),[4,2,6,0,2]));
console.log(arrEqual(odd([4,2,6,1,0,2,5]),[1,5]));
