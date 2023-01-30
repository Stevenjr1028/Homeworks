// Creando las arrays.
const myArray = [2,4,6,8];
const myArray2= [1,3,5,7,9];
// Funcion Length(Representa la cantidad de elementos en la matriz):
console.log(myArray.length , myArray2.length)
// Funcion at ():
console.log(myArray.at(2), myArray2.at(-3))
// Funcion concat(Se usa para unir dos o mas arrays, creando un nuevo array):
const myArray3= myArray.concat(myArray2);
console.log(myArray3)
// Funcion Constructor(Se utiliza para crear objetos array):
const numerosvacio = new Array(3);
const numeros= new Array(1,2,3);
console.log(numerosvacio, numeros)
// Funcion copyWithin():
console.log(myArray.copyWithin(0,2))
