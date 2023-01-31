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

// Funcion copyWithin( transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), sin modificar su propiedad length y lo devuelve.):
console.log(myArray.copyWithin(0,2))

// Funcion entries(retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.):
const iterator =myArray2.entries()
for (let e of iterator ) {
    console.log(e);
}

// Funcion every (Determina si todos los elementos en el array satisfacen una condición.):
const myArray4 = [1,2,3,4,5,6,7];
const areEvery = myArray4.every(x => x <= 1)
const areEvery2= myArray4.every(x => x >= 1)
console.log(areEvery)
console.log(areEvery2)

// Funcion Fill (cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.)
const myArray5 = ["a","b","c","d","e"];
console.log(myArray5.fill("f"));
console.log(myArray5.fill("g",1));
console.log(myArray5.fill("h",2,5));

// Funcion Filter ( crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.)
const objects = ["Carro", "Camiseta", "Balon", "Avioneta", "Mono", "Cartera"];
const result = objects.filter(objects => objects.length > 5);
console.log(result);


// Funcion Find (evuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.):
const myArray6 = [1,23,60,15,30,200];
const found = myArray6.find(x=> x > 10);
console.log(found);

// Funcion FindIndex (devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.)
const index = myArray6.findIndex(x=> x > 10);
console.log(index);

// Funcion FindLast (tera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefinedse devuelve.)
const found2 = myArray6.findLast(x=> x >10);
console.log(found2);

// Funcion FindLastIndex (itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.)
const index2= myArray6.findLastIndex(x=> x >10);
console.log(index2);

// Funcion Flat (rea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.):
const myArray7= [1,2,3,[4,5]];
console.log(myArray7.flat());

// Funcion FlatMap(primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz.):
const flattened= myArray7.flatMap(x=> x);
console.log(flattened);

// Funcion forEach(ejecuta la función indicada una vez por cada elemento del array.):
const myArray8= ["a","b","c","d","a"];
myArray8.forEach(element=> console.log(element));

// Funcion includes(determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.):
console.log(myArray8.includes("a"));
console.log(myArray8.includes("f"));

// Funcion indexOf (retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.):
console.log(myArray8.indexOf("a"));
console.log(myArray8.indexOf("a",2));

// Funcion join (une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.):
const pets = ["gato", "perro", "hamster"];
console.log(pets.join());

// Funcion keys(devuelve un nuevo objeto Array Iterator que contiene las claves de índice con las que acceder a cada elemento en el array.):
const myArray9 = ["a","b","c"];
const terator = myArray9.keys();

for (const key of terator) {
    console.log(key)
}

// Funcion LastIndexOf( devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.):
const consoles = ["PS4","XBOX360","N64","PS4","PS5"];
console.log(consoles.lastIndexOf("PS4"));

// Funcion map(crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.):
const myArray10 = [1,2,3,4,5];
const map1= myArray10.map(x=> x * 2);
console.log(map1);

// Funcion pop ( elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.):
const plants = ["papa","tomate","brocoli","pepino"];
const lastitem = plants.pop();
console.log(lastitem);
console.log(plants);

// Funcion push ( añade uno o más elementos al final de un array y devuelve la nueva longitud del array.):
const animals = ["vaca","pollo","tigre"];
const count = animals.push("leon");
console.log(count);
console.log(animals);

// Funcion reduce(ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.):
const myArray11 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = myArray11.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);

// Funcion reduceRight(Aplica una función simultáneamente contra un acumulador y cada elemento de un array (de derecha a izquierda) para reducirlo a un único valor.):
const myArray12 = [[0,1],[2,3],[4,5]];
const result2 = myArray12.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result2);

// Funcion reverse (invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.):
const numbers= ["uno","dos","tres"];
const reverse = numbers.reverse();
console.log(reverse);

// Funcion shift (elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.);
const myArray13= [1,2,3,4];
const firstelement = myArray13.shift();
console.log(myArray13);
console.log(firstelement);

// Funcion slice(devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.):
const name = ["Ana","Luis","Julio","Carlos"];
console.log(name.slice(2));
console.log(name.slice(1,3));

// Funcion some ( comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.):
const myArray14 = [1,2,3,4,5,6,7,9];
const even = (x)=> x>10;
console.log(myArray14.some(even));

// Funcion sort ( ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. ):
const months = ["Enero","Febrero","Marzo","Abril"];
months.sort();
console.log(months);

// Funcion splice (cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.):
months.splice(1,0,"Mayo");
console.log(months);

// Funcion toLocaleString(devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto usando su método toLocaleString y dichos Strings son separados por un caracter específico para la localidad (como una coma para la separación de decimales “,”).):
const myArray15 = [1, 'a', new Date('31 Ene 2023 14:12:00 UTC')];
const localeString = myArray15.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);

// Funcion toString(devuelve una cadena de caracteres representando el array especificado y sus elementos.):
const myArray16 = [1, 2, 'a', '1a'];
console.log(myArray16.toString());

// Funcion unshift ( agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.):
const myArray17 = [1, 2, 3];
console.log(myArray17.unshift(4, 5));
console.log(myArray17);

// Funcion values (devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.)
const myArray18 = ['a', 'b', 'c'];
const iterato = myArray18.values();
for (const value of iterato) {
  console.log(value);
}
