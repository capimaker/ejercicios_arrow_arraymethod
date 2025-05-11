/*Convierte la siguiente función en una función flecha:
function saludar() {
  return "Hola";
}
*/
const saludar = () => "Hola";

/*Convierte la siguiente función en una función flecha en línea:
function division(a,b) {
  return a / b;
}
*/
const division = (a, b) => a/b;


/* Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}
*/ 

const miNombre = (nombre) => `Mi nombre es ${nombre}`;

/*Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	
*/
const test2 = () => console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback();
test1(test2);



/*2. Foreach
Utiliza la siguiente array para resolver los próximos ejercicios: */
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];


//Crea un array con la gente mayor de 25 años y muéstralo por consola

gente.forEach((persona) => {
    if (persona.edad > 25) {
        console.log(persona);
    }
}
);

//Crea un array con la gente que empieza por J.

gente.forEach((personas) => {
    if (personas.nombre.startsWith("J")) {
        console.log(personas);
    }
}
);


/*3. Map
Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
Crea un array con la gente que empieza por J. */
gente.map((persona) => {
    if (persona.edad > 25) {
        console.log(persona);
    }
}
);
gente.map((personas) => {
    if (personas.nombre.startsWith("J")) {
        console.log(personas);
    }
}
);


/*Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
 */

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const numbersElevados = numbers.map((number) => Math.pow(number, number));
console.log(numbersElevados);

/* 4. Filter
Crea un segundo array que devuelva los impares*/

 const numers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numers.filter((number) => number % 2 !== 0);
console.log(impares);

//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];

const veganos = foodList.filter((food) => food.isVeggie === true);
const mostrarFrase = veganos.map((food) => `Que rico ${food.name} me voy a comer!`);
console.log(mostrarFrase);

/* 5. Reduce
Dado el siguiente array, obtén la multiplicación de todos los elementos del array:*/
const numeros = [39, 2, 4, 25, 62];
const multi = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(multi);
// Salida--> 483600




/*Extras
Map
Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:*/

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];


// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */

const frases = staff.map((persona) => {
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(" y ")}`;
}
);
console.log(frases);


//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

const foodLi = ["Pizza", "Ramen", "Paella", "Entrecot"];
const paises = ["Italia", "Japón", "Valencia", "Francia"];

const comidas = foodLi.map((comida, index) => {
    if (comida === "Entrecot") {
        return `Aunque no como carne, el ${comida} es sabroso`;
    } else {
        return `Como soy de ${paises[index]}, amo comer ${comida}`;
    }
}
);
console.log(comidas);

//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/


/*Filter
Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros*/

const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
const caros = inventory.filter((item) => item.price > 300);
const nombresCaros = caros.map((item) => item.name);
console.log(nombresCaros);

      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]

*/