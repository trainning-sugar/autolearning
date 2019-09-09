# Recursividad

- Concepto simple y a la vez potente a la hora de programar.

- Basicamente el uso de recursividad en nuestros programas se da cuando nosotros definimos una función cuya implementación, el código que declaramos dentro, contiene una invocación a la propia función.

- Es muy usado al momento de programar y nos da un código más legible.

## ¿Que debemos considerar?

Al momento de trabajar recursidad debemos tener en cuenta :

- En nuestra implementación debe estar presente la instrucción que detenga a la recursión para evitar que se ejecute de manera infinita (*condición de terminación*).

  - Caso de ejecución no recursivo
  - Necesario para detener la ejecución recursiva

```js
// Ejemplo de factorial de un número, solución iterativa.
// N! = 1 * 2 * 3 * 4 * 5...(N-1)*(N)

const factorial = num => {
 let acum = 1;
 for(i = 1; i <= num; i++){
    acum *= i;
 }
 return acum
}

console.log(factorial(3));
```

```js

// Otra solución iterativa by Bella Sheryl
const factorial = (n) => {
   if(n===1) {
       return 1
   } else {
       for (let i = 1; i<=n; i++) {
          return n* factorial(n-1)
       }
   }
}
console.log(factorial(4))
```

```js
const arrVowels = ['a','e','i','o','u']

const stringWithVowels = arr => {
  let str = '';
  for(let i = 0; i < arr.length; i++){
    str +=arr[i]
  }
  return str;
}
console.log(stringWithVowels(arrVowels));
```

```js

var cadenaVowels = (arr) => {
if(!arr.length){
    return '';
}
return arr.shift() + cadenaVowels(arr)
}

cadenaVowels(['a','e','i','o','u'])
```

```js
// Solución recursiva con acumulador como variable privada

const factorial = (num, _acum) => {
 _acum = _acum || 1;
 if(num === 1){
  return _acum
 }
 _acum = factorial(num-1, _acum*num)
 return _acum
}

console.log(factorial(4));
```

```js
//Implementación de Yulissa Terán
const factorial =(num)=>{
  let result = 1;
  if(num>1){
  result = num * factorial(num-1);  
  }
  return result ;
};
console.log(factorial(5))
```

```js
// Implementación de Yenifer Galarza con amor de Mely
var factorial = (number) => {
   if(number !== 1) {
     return number * factorial(number -1)
   } else {
     return number
   }
}
console.log(factorial(5));
```

```js
// Solución recursiva sin acumulador
const factorial = num => {
 if(num === 0 || num === 1){
  return 1;
 }
 return  num * factorial(num-1)
}
console.log(factorial(4));
```

```js
const countDown = n => {
  if(!n){
    return [];
  }
  return [n].concat(countDown(n-1))
}

console.log(countDown(5));
```

```js
//Obteniendo files de manera síncrona
const getFiles  = (dir, files_) => {
 const Fs = require('fs');
 const Path = require('path');
    files_ = files_ || [];
    const files = Fs.readdirSync(dir);
    files.forEach(file => {
     const name = Path.join(dir,file)
     if(Fs.statSync(name).isDirectory()){
      getFiles(name, files_);
     } else {
      files_.push(path)
     }
    })
    return files_;
}
console.log(getFiles('node_modules').length)
```

```js
var arr = ['a','b','c','D']

function hola(array){
    var resul = [];
    if(!array.length) return resul
    var first = array.shift();
    if(first === first.toUpperCase()){
      resul.push(first.toLowerCase())
    } else {
      resul.push(first.toUpperCase()) 
    }
    return resul.concat(hola(array))
}


console.log(hola(arr))
//console.log(arr)
```

## Recursos sobre recursividad

- [Recursividad-1](https://medium.com/laboratoria-how-to/no-todo-es-iterar-cuando-la-recursividad-ataca-8d8fcdb529a)
- [Recursividad-2](https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727)

De donde se sacó el ejemplo y parte de contenido en el presente [Fundamentos-recursividad](https://www.youtube.com/watch?v=YsFX7jf9Js4)