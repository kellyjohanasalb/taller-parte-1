#MÓDULO SOBRE LÓGICA, LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CON JAVASCRIPT
<p>
Para mi la logica en programación la parte que le da dinamismo a las páginas web que vemos y con la que interactuamos (como botones, imágenes, textos), la lógica es muy importante porque ayuda a que la página funcione correctamente. Por ejemplo, si se hace clic en un botón para enviar un mensaje, hay una lógica detrás que se encarga de asegurar que tu mensaje se envíe a la persona correcta. 
la lógica en programación es como el cerebro de las páginas web y aplicaciones, que les ayuda a saber qué hacer y cómo reaccionar a lo que hacemos cuando las usamos. Es por eso que es tan importante en el desarrollo web Frontend.
</p>

###### Definir el concepto de “algoritmo” y proporcionar un ejemplo sencillo de un algoritmo relacionado con la lógica de programación.
<p>
Un algoritmo es como una receta o una serie de pasos que se siguen para resolver un problema o realizar una tarea. En programación, un algoritmo es un conjunto de instrucciones detalladas y ordenadas que le dicen a la computadora cómo realizar una tarea específica.

Para que lo entiendas mejor, te daré un ejemplo sencillo como la receta para hacer un sándwich:
</p>
- Recolectar Ingredientes: Pan, queso, jamón, y mantequilla.
- Preparar los ingredientes: Cortar dos rebanadas de pan.
- Untar Mantequilla: Extender una capa de mantequilla en una cara de cada rebanada de pan.
- Colocar el Jamón y el Queso: Poner una rebanada de jamón y una de queso entre las dos rebanadas de pan, con la mantequilla hacia adentro.
- Cerrar el Sándwich: Asegurarse de que el jamón y el queso estén completamente dentro del pan.
- Servir: Colocar el sándwich en un plato para comerlo.
Con este ejemplo, vemos que cada paso es una instrucción clara y precisa. De la misma manera, en la lógica de programación, un algoritmo es una serie de pasos que se siguen para realizar tareas como calcular números, organizar datos, o incluso controlar el funcionamiento de un juego. Estos pasos deben ser claros y exactos para que la computadora pueda entenderlos y ejecutarlos correctamente.

#####  ¿Qué son estructuras de control en la programación?, ¿Cuáles son los tipos de estructuras de control y las estructuras más comunes de cada tipo?, Describir al menos dos tipos de estructura de control, explicar por qué son importantes y proporcionar ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend.
<p>
bueno las estructuras de control son las que marcan como el paso a paso de los programas  el resultado de tu código. Pero a veces, dependiendo de lo  los datos con los que trabaja tu código, necesitas tomar decisiones, como qué  usar o por cuánto tiempo hacer algo. Aquí es donde entran las "estructuras de control".
</p>

###### ¿Qué son las Estructuras de Control?
<p>
Las estructuras de control son como las reglas en tu receta que te dicen qué hacer en diferentes situaciones. Te ayudan a decidir qué camino tomar mientras cocinas (o mientras tu programa se ejecuta).
</p>

###### Tipos de Estructuras de Control
Estructuras Condicionales: Son como decir "Si tengo zanahorias, haré sopa de zanahoria; si no, haré sopa de tomate". En programación, esto se ve así:

- if-else (Si-Sino): Te permite ejecutar un código si se cumple una condición y otro código si no se cumple.

- switch: Es como tener muchas opciones de ingredientes y elegir uno para tu receta.

###### Estructuras de Repetición (Bucles): Son como decir "Cocinaré 5 tortillas, una tras otra". Repites una acción muchas veces. Ejemplos son:

- for: Usado para repetir una acción un número específico de veces.
- while: Continúa haciendo algo mientras se cumpla una condición.

#####  Ejemplos en Desarrollo Web Frontend
En el desarrollo web Frontend, usamos estas estructuras para hacer que las páginas web respondan a lo que hacen los usuarios o para mostrar información de manera dinámica. Aquí tienes dos ejemplos con código:

Estructura Condicional if-else: Imagina que tienes un sitio web y quieres mostrar un mensaje diferente si el usuario está registrado o no.
```
let usuarioRegistrado = true;
if (usuarioRegistrado) {
    console.log("Bienvenido de nuevo!");
} else {
    console.log("Por favor, regístrate.");
}
```

###### Estructura de Repetición for: Supongamos que quieres mostrar en tu página web una lista de los 10 primeros números.

```
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```
###### ¿Por Qué Son Importantes?
Estas estructuras son importantes porque hacen que nuestros programas sean inteligentes y flexibles. Nos permiten tomar decisiones basadas en diferentes situaciones, y repetir tareas sin tener que escribir el mismo código una y otra vez. ¡Es como tener una receta que se adapta a lo que tienes en tu cocina y cuántos invitados tienes!

Espero que esto te haya ayudado a entender mejor las estructuras de control en programación. Si tienes más preguntas, ¡aquí estoy para ayudarte!
###### Describir cómo se declaraban variables y constantes en JavaScript antes de la introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de variables y constantes, y mencionar los problemas que esta mejora resuelve en el desarrollo web Frontend.

- 1950 Inicio de las computadoras

- 1969 Se creo la red ARPANET,

- 1970-1990 Se explora ARPANET

- 1990 Tim Berners.lee dio pauta al internet y se conocio el termino World Wide Web (forma de acceder a archivos, documentos enlaces al alcanze de todos)

- 1993 Nacimiento de un Navegador.

Universitarios pioneros escribieron un sofware simple que inicio una revolucion.

- Marc Andreessen: le dio vida a una gran empresa

- Netscape: Tenia un navegador que podias acceder a internet (HTML simple, enlaces, algunas fotografias)

Browser wars: Guerra de los navegadores Microsoft en 1995 lanzó Internet Explorer, en la guerra nacieron tecnologias como CSS, conceptos como la empresa mozilla y JS. JS: Apareció en 4 de diciembre de 1995 Diseñado por Netscape Communications, Fundación Mozilla.

Su primer nombre fue Mocha

Luego LiveScript

Finalmente JavaScript.

Microsoft no se podia quedar atras y lanzo JScript y por eso tenermos ECMAScript (1997) permitio un estandar (serie de reglas que va a tener los lenguajes de programacion).

En cuanto a la mejora de la declaración de variables,  a como lo entiendo es que ya no se usa la palabra reservada VAR ya que esta nos permite declarar pero tambien modificar cuantas veces queramos y pues en codigo de necesitan a veces que sean valores fijos y que no se puedan modificar. y con la actualización de ECMAScript 6 pues tenemos nuevas palabras reservadas  como LET que cumple la funcion de var y nos deja modificar y CONST que esta nos permite almacenar info sin modificar.

######  ¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una declaración de función, una expresión de función y una función de flecha (arrow function)? Proporcionar ejemplos de cada una

<p>
Bueno las funciones son bloques de construcción fundamentales en javascript.
</p>

###### Declaración de Función
<p>
la declaración de una función o expresión de función tiene una palabra clace que es function, y de ahí se le pasan unos parámetros.
</p>

```
function saludar() {
    console.log("¡Hola!");
}
```
Aquí, saludar es el nombre de tu función. Cuando quieras saludar, simplemente llamas a saludar().

######  Expresión de Función

<p>
Bueno en el definición anterior se puede decir que también es una función declarativa. Pues la expresión de función es también  declarativa y puede ser anónima osea que no tiene que tener un nombre, sino que le asignas una variable.
</p>

```
let despedirse = function() {
    console.log("¡Adiós!");
};
```
En este caso, la función se guarda en la variable despedirse. La llamas de la misma manera: despedirse().

###### Función de Flecha (Arrow Function)
<p>
la función flecha es una versión moderna y mas corta. Y es mas popular por ser mas compacta.
</p>

```
let saludarRapido = () => {
    console.log("¡Hola, rápido!");
};
```
Aquí, => es como decir "haz esto". La función saludarRapido hace lo mismo que las anteriores, pero está escrita de forma más concisa.

Diferencias Clave
- Declaración de función: Puedes llamarla antes de que aparezca en el código (gracias a algo llamado "hoisting"). Es como tener una receta clásica que siempre sabes dónde encontrar.

- Expresión de función: Debes definirla antes de usarla. Es como una tarjeta de receta que no puedes usar hasta que no la encuentres y la leas.

- Función de flecha: Además de ser más corta, no tiene su propio this. Esto es un poco avanzado, pero imagina que es como una receta que no puede cambiar los ingredientes que ya estaban en la cocina antes de que empezaras a cocinar.

Cada tipo de función tiene su propio uso especial dependiendo de lo que necesites hacer en tu código. ¡Espero que esto te ayude a entender mejor las funciones en JavaScript! Si tienes más dudas o necesitas más ejemplos, aquí estoy para ayudarte.

###### ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones.
<p>
Las funiones permiten agrupar código que realiza una tarea específica. Esto hace que el código sea más organizado, fácil de leer y de mantener. además, puedes reutilizar una función en diferentes partes del sitio web sin tener que escribir el mismo código una y otra vez.
</p>
- Ejemplo: Imagina que tienes un sitio web donde el usuario puede clickear un botón para ver un mensaje. Puedes crear una función que muestre este mensaje y llamarla cada vez que el usuario haga clic en el botón.


```
function mostrarMensaje() {
    alert("¡Bienvenido a nuestro sitio web!");
}
```
<p>
Separación de Preocupaciones.
las funiones ayudan a separar las diferentes partes del código según lo que hacen. Esto facilita la comprensión del código, su depuración y la colaboración en proyectos grandes.
</p>
- Ejemplo: En una aplicación de comercio electrónico, podrías tener una función para calcular el total del carrito de compras, otra para actualizar la interfaz del usuario con los detalles del carrito, y otra para procesar el pago.

```
function calcularTotal(carrito) {
    // Código para calcular el total
}

function actualizarUI() {
    // Código para actualizar la interfaz del usuario
}
```
<p>
Asíncronia y Manejo de Eventos.
En desarollo web, a menudo necesitas realizar tareas que no suceden inmediatamente, como solicitar datos al servidor. Las funciones te permiten manejar estas operaciones asíncronas y los eventos de manera eficiente.
</p>
- Ejemplo: Cuando un usuario envía un formulario en tu sitio web, puedes tener una función que maneje el envío del formulario y otra que responda cuando los datos se hayan enviado correctamente.

```
function enviarFormulario() {
    // Código para enviar el formulario
}

function respuestaExitosa() {
    // Código para manejar la respuesta exitosa
}
```
<p>
Ventaja de las Funciones Flecha.
 las funciones flecha son especialmente útiles en estos contextos por varias razones:
 
 - Sintaxis mas corta y clara: hacen que el código sea más conciso y fácil de leer. lo cual es beneficioso especialmente en la manipulación de eventos y operaciones asíncronas.
 
 - No Tienen su Propio this: En el manejo de eventos y callbacks, el valor de this puede cambiar y causar problemas. Las funciones flecha mantienen el valor de this del contexto en el que fueron creadas, lo que simplifica el trabajo con estos casos.

Por ejemplo, en una aplicación web que utiliza muchas interacciones de usuario, el uso de funciones flecha en manejadores de eventos puede hacer que el código sea más limpio y fácil de entender, evitando confusión sobre qué es this en un momento dado.
</p>

#####  ¿Cuál es la diferencia entre parámetro y argumento?
###### Parámetro
<p>
Un parámetro es como un instrucción que necesita. Cuando escribes una función, los parámetros son las "variables" que listas y que la función espera recibir cuando se llama. Son como espacios reservados para los valores que se utilizarán dentro de la función
</p>
- ejmplo: En una función para sumar dos números, los parámetros serían los dos números que necesitas para realizar la suma.

```
function sumar(numero1, numero2) {
    // 'numero1' y 'numero2' son parámetros
    return numero1 + numero2;
}
```

###### Argumento
<p>
Un argumento es como el ingrediente real que utilizas al cocinar. Es el valor real que pasas a la función cuando la llamas. Los argumentos son los datos especifícos que reemplazan a los parámetros cuando se ejecuta la función.
</p>

- ejemplo: Al usar la función de suma, los argumentos serían los números especificos que proporcionas para sumar.

```
let resultado = sumar(5, 3);
// '5' y '3' son argumentos

```
<p>
Entoces podemos decir que los parámetros son como variables que definimos en la función y que actúan como contenedores para los valores que se recibirán. Los argumentos son los valores reales que pasamos a la función cuando la llamamos. Los argumentos llenan los contenedores(Parámetros) que la función necesita para trabajar
</p>


<p>
Las funciones en el desarrollo web son esenciales para estructurar el código de manera eficiente, reutilizable y fácil de mantener, además de manejar adecuadamente las tareas asíncronas y lo eventos. las funciones flecha aportan claridad y simplicidad a estos procesos.
</p>

######  Definir el concepto de Callback y proporcionar un ejemplo práctico.
<p>
En términos mios un callback en programación es como pedirle a un amigo que haga algo por mi y me avise cuando termina.
Y ya en términos técnicos, un callback es una función que se para a otra función como un argumento y que se espera que sea ejecutada o llamada de vuelta. Y es muy utilizada para manejar operaciones asíncronas, como esperar a que se cargue una página web o reciban datos de un servidor 
</p>
- ejemplo:  Supongamos que estás construyendo un sitio web y quieres cargar datos de un servidor. Quieres que, una vez que los datos estén completamente cargados, se muestre un mensaje. Aquí es donde usarías un callback.
- Función que Carga Datos: Esta es la función principal que intenta obtener datos del servidor.

- Callback: Una función que se pasa a la función principal y que se ejecutará después de que los datos se hayan cargado.

```
function cargarDatos(callback) {
    // Simulamos la carga de datos con un temporizador
    setTimeout(() => {
        // Aquí es donde los datos estarían completamente cargados
        let datos = "Datos cargados con éxito";
        
        // Llamamos al callback y pasamos los datos
        callback(datos);
    }, 2000);
}

function datosCargados(mensaje) {
    console.log(mensaje);
}

// Llamamos a cargarDatos y le pasamos datosCargados como callback
cargarDatos(datosCargados);

```
Entonces podemos decir que en 'cargarDatos' es  una función que simula la carga de datos. Y 'datosCargados'  es el callback que se ejecuta después de que los datos se han cargado. Entonces llamamos a 'cargarDatos' y le pasamos 'datosCargados' como argumento. Y una vez que 'cargarDatos'  ha terminado de cargar los datos, llama a 'datosCargados'  y le pasa el mensaje "Datos cargados con éxito".

######¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones? Proporcionar ejemplos de hoisting en declaraciones de variables y funciones
<p>
En términos mas o menos claros, en programación el hostinf es un comportamiento por el cual las declaraciones de variables y funciones son movidas al inicio de su ámbito o contexto de ejecución antes de que el código se ejecute
</p>
**Hosting en Variables**
<p>
En javascript, cuando declaras una variable usando 'var', su declaración (pero no su inicialización)se "eleva" al inicio de ámbito o espacio. Entonces esto significa que puedes referenciar la variable antes de que esté declarada en el código, pero hasta que no llegues a la declearación, la variable tendrá el valor 'undefined'
</p>

- ejemplo: 

```
console.log(miVariable); // undefined, pero no se produce un error
var miVariable = 5;
console.log(miVariable); // 5
```
Entonces, la primera línea no genera un error a pesar de que miVariable aún no ha sido declarada. Es como si JavaScript automáticamente moviera la declaración var miVariable; al inicio del ámbito, pero sin asignarle el valor 5 hasta que se alcance la línea correspondiente.

Es importante destacar que el hoisting se comporta de manera diferente con let y const. Con estas declaraciones, la variable no se puede usar hasta que se haya declarado; intentar hacerlo generará un error.


**Hoisting en Funciones**
<p>
El hoisting también se aplica a las funciones.Cuando declaras una función con la sintaxis de declaración de función (no con expresiones de función), toda la defición de la función se mueve al incio del ámbito o espacio.
</p>
- ejemplo de función:

```
console.log(miFuncion()); // "¡Hola!"

function miFuncion() {
    return "¡Hola!";
}
```
Aquí, puedes llamar a miFuncion antes de su declaración en el código sin problemas porque JavaScript "eleva" toda la definición de la función.

###### ¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en un objeto?
aqui respon dere muy tenico porque javascript orientada a objetos no vimos y pedimos una master class para este tema pero no se dio.
<p>
En la programción orientada a objetos, particularmente en javascript, los términos "propiedades" y "métodos" se refieren a diferentes tipos de mienbrosde un objeto.
</p>

**¿Qué son Propiedades?*
<p>
Las propiedades son valores asociados con un objeto. Son similares a las variables, pero en lugar de existir por sí solas, están vinculadas a un objeto. Las propiedades pueden ser de cualquier tipo de dato en JavaScript, como números, cadenas, o incluso otras funciones y objetos.
</p>
- ejemplo de una propiedad:
Imagina un objeto libro que tiene propiedades como titulo, autor, y año.

```
let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943
};
```

Aquí, titulo, autor, y año son propiedades del objeto libro.

**¿Qué son Métodos?**
<p>
Los métodos son funciones asociadas a un objeto. Son como acciones que el objeto puede realizar. Los métodos se definen de la misma manera que las funciones, pero cuando una función es parte de un objeto, la llamamos "método".
</p>

- Ejemplo de un Método: Siguiendo con el objeto libro, podríamos añadirle un método para mostrar información sobre el libro.

```
let libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    mostrarInfo: function() {
        return `Libro: ${this.titulo}, Autor: ${this.autor}, Año: ${this.año}`;
    }
};

console.log(libro.mostrarInfo());
```
Aquí, mostrarInfo es un método del objeto libro. Utiliza las propiedades del objeto para devolver una cadena de texto con la información del libro.

**Diferencia entre Propiedades y Métodos**
- Propiedades: Son como los "atributos" o "características" del objeto. Almacenan datos relacionados con el objeto.
- Métodos: Son como las "acciones" o "comportamientos" que el objeto puede realizar. Son funciones que generalmente operan con o manipulan las propiedades del objeto.

<p>
 las propiedades son los datos asociados a un objeto, mientras que los métodos son las funciones o acciones que un objeto puede llevar a cabo. Ambos son fundamentales en la programación orientada a objetos, proporcionando una manera de estructurar los datos y las funcionalidades de manera lógica y organizada
</p>

###### Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.
<p>
Para acceder a una propiedad de un objeto en JavaScript, hay dos formas principales de hacerlo: usando la notación de punto (.) y la notación de corchetes ([]). Ambas formas tienen sus propias ventajas y situaciones en las que son más apropiadas.

Notación de punto (.):
La notación de punto se utiliza para acceder a las propiedades de un objeto utilizando un punto (.) seguido del nombre de la propiedad. Por ejemplo:
</p>

```
const persona = {
    nombre: "Juan",
    edad: 30
};

console.log(persona.nombre); // Accediendo a la propiedad "nombre" usando la notación de punto
```
**Ventajas**

- Es más concisa y fácil de leer.
- Es la forma más común de acceder a las propiedades de un objeto.
Situaciones en las que conviene usar la notación de punto:

- Cuando se conoce el nombre de la propiedad de antemano y es un identificador válido (no contiene espacios, caracteres especiales, etc.).
- Cuando se desea acceder a una propiedad de forma estándar y legible.
<p>
Notación de corchetes ([]):

La notación de corchetes se utiliza para acceder a las propiedades de un objeto utilizando corchetes [] con el nombre de la propiedad como una cadena (string) dentro de los corchetes. Por ejemplo:
</p>

```
let persona = {
    nombre: "Juan",
    edad: 30
};

let propiedad = "nombre";
console.log(persona[propiedad]); // Accediendo a la propiedad "nombre" usando la notación de corchetes
```
**Ventajas:**

- Permite acceder a propiedades cuyos nombres son variables o no son identificadores válidos.
- Útil cuando se generan nombres de propiedades dinámicamente.
Situaciones en las que conviene usar la notación de corchetes:

- Cuando se necesita acceder a una propiedad cuyo nombre es una variable o se genera dinámicamente.
- Cuando se trabaja con propiedades cuyos nombres contienen espacios, caracteres especiales o son palabras reservadas.

Situación en la que es muy útil recorrer las propiedades de un objeto:
La situación común en la que es útil recorrer las propiedades de un objeto es cuando deseas realizar una operación en todas las propiedades de ese objeto, como mostrarlas en una lista, realizar cálculos basados en sus valores o filtrar ciertas propiedades según algún criterio específico. También es útil cuando trabajas con objetos cuya estructura puede variar dinámicamente, ya que te permite adaptarte a las propiedades que tenga en un momento dado.

###### ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden almacenar?
<p>
Los objetos son fundamentales en la programación web y en la programación en general debido a su capacidad para representar y organizar datos de manera estructurada. 

Son útiles en la programación web por varias razones:
</p>

- Organización de datos: Los objetos permiten organizar datos relacionados en una estructura coherente. Esto facilita la gestión y el acceso a los datos, lo que es esencial en el desarrollo web, donde a menudo se trabaja con una gran cantidad de información, como datos de usuario, contenido de páginas web, configuraciones, etc.

- Abstracción de conceptos: Los objetos permiten abstraer conceptos del mundo real en el código. Por ejemplo, en una aplicación web, puedes representar un usuario como un objeto con propiedades como nombre, correo electrónico, contraseña, etc. Esto hace que el código sea más legible y comprensible.

- Modularidad: Los objetos pueden agrupar funciones y datos relacionados en una unidad coherente. Esto facilita la creación de código modular y mantenible, lo que es esencial en el desarrollo web, donde a menudo se trabajan con componentes reutilizables, como formularios, widgets y elementos de interfaz de usuario.

- Interacción con el DOM: En el desarrollo web, los objetos se utilizan para interactuar con el Document Object Model (DOM). Puedes crear objetos que representen elementos HTML y manipular su contenido, estilo y comportamiento dinámicamente.

- Almacenamiento de datos: Los objetos pueden almacenar una amplia variedad de tipos de datos, incluyendo números, cadenas de texto, booleanos, arreglos, otros objetos e incluso funciones. Esto los hace versátiles para representar y manipular diferentes tipos de información en una aplicación web.

**En cuanto a los tipos de datos que pueden almacenar, los objetos en JavaScript pueden contener prácticamente cualquier tipo de dato, ya que JavaScript es un lenguaje de tipado dinámico. Algunos ejemplos de lo que puedes almacenar en un objeto incluyen:**

- Números: Puedes usar propiedades de objetos para almacenar valores numéricos, como edades, puntuaciones, o cualquier otro número relevante.
- Cadenas de texto: Puedes tener propiedades que almacenen nombres, descripciones, direcciones de correo electrónico y otros datos de texto.
- Booleanos: Puedes usar propiedades booleanas para representar estados, como si un usuario está autenticado o si un elemento está visible.
- Arreglos: Puedes tener propiedades que almacenen arreglos de valores, lo que te permite organizar y acceder a conjuntos de datos.
- Otros objetos: Puedes anidar objetos dentro de objetos para representar estructuras de datos más complejas y jerárquicas.
- Funciones: Puedes almacenar funciones como métodos en un objeto, lo que te permite encapsular la lógica relacionada con ese objeto.

###### ¿Qué es un array en JavaScript y por qué son esenciales?
<p>
Esto es un concepto de javascript, y es una estructura de datos, coo numeros , cadenas de texto.
</p>
- Almacenamiento de datos.
- Acceso a elementos po indice.
- Iteracion de bucles.
- Almacenamientos de listas y colecciones.
- Métodos y funcionalidad incorporadas.

###### ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo.

<p>
Entocnes acceder a un elemento dentro de un array en JavaScript, puedes utilizar la notación de corchetes [] con el índice del elemento que deseas acceder. Los índices comienzan en 0 para el primer elemento del array y aumentan en 1 para cada elemento subsiguiente. 
ejemplo:
</p>

```
// Definir un array de números
let numeros = [10, 20, 30, 40, 50];

// Acceder al primer elemento (índice 0)
let primerNumero = numeros[0];
console.log("El primer número es: " + primerNumero); // Resultado: El primer número es: 10

// Acceder al tercer elemento (índice 2)
let tercerNumero = numeros[2];
console.log("El tercer número es: " + tercerNumero); // Resultado: El tercer número es: 30

// Acceder al último elemento (índice igual a la longitud del array menos 1)
let ultimoNumero = numeros[numeros.length - 1];
console.log("El último número es: " + ultimoNumero); // Resultado: El último número es: 50
```

###### Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web.

<p>
entonces en funciones de arrays en JavaScript que son útiles en la programación web. 
</p>
- map(): se utiliza para crear un nuevo array.
- pop(): agrega elementos al inicio de los que se tiene.
- shift(): borra elementos que esta al inicio de la posición.


###### Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y filtrar datos en un array.

<p>
bueno por aqui hago el jemplo que utiliza tanto la función map() para transformar datos como la función filter() para filtrar datos en un array:
</p>

```
let libros = [
    { titulo: "El código Da Vinci", autor: "Dan Brown", añoPublicacion: 2003 },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", añoPublicacion: 1967 },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", añoPublicacion: 1997 },
    { titulo: "Los juegos del hambre", autor: "Suzanne Collins", añoPublicacion: 2008 },
    { titulo: "El alquimista", autor: "Paulo Coelho", añoPublicacion: 1988 }
];

// Utilizamos map() para obtener solo los títulos de los libros
let titulos = libros.map(function(libro) {
    return libro.titulo;
});

// Utilizamos filter() para obtener los libros publicados después del año 2000
let librosRecientes = libros.filter(function(libro) {
    return libro.añoPublicacion > 2000;
});

console.log("Títulos de libros:", titulos);
console.log("Libros publicados después del año 2000:", librosRecientes);

```

# MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN

###### ¿Qué significa HTML y cuál es su función en el desarrollo web?

<p>
Bueno para mi HTML es esencial para la creación de páginas web, sirviendo como su esqueleto o estructura base, donde agregamos estilos y funcionalidades para crear sitios web completos y funcionales. y que es lenguaje  de Marcado de Hipertexto.
</p>
###### ¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas esenciales

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<p>
Ya dentro del body podemos poner una etiqueta sesion, un article y también h1 que es donde encerramos todo el contenido visible de la página, como texto, imágenes, enlaces, tablas, listas y otros elementos.

entonces uan sesion se usa para definir una sección dentro de un documento.
un article : Esta etiqueta se utiliza para encerrar contenido autocontenido y distribuible.
y un h1 sirve para el encabezado principal de una página o sección.
</p>

###### ¿Qué es CSS y cuál es su propósito en el desarrollo web?

<p>
Conocemos que Css se conoce como hojas de estilos en cascada(Cascading Style Sheets ) y su proposito en el desarrollo web es ser esa parte grafica que vemos, me refiero a la parte visual que el usuario incluyendo colores, fuentes, espaciado, alineación, tamaños de los elementos.
</p>

######  ¿Qué son selectores CSS, cuáles son los principales tipos de selectores y porqué es importante entender la especificidad en el contexto de las hojas de estilo en cascada (CSS)? Describir al menos tres tipos de selectores CSS y cómo la especificidad afecta a la aplicación de estilos en un proyecto de desarrollo web Frontend.  Proporcionar ejemplos de situaciones en las que se utiliza la especificidad de selectores  para resolver conflictos de estilos.

<p>
Los selectores CSS son esas etiquetas que  utilizados para seleccionar los elementos del DOM (Document Object Model) a los cuales se les aplicarán estilos. 
ejemplo:
</p>

- Selector de Tipo o de Etiqueta: en estos se comprenden como la etiqueta (p).
- Selector de Clase: estos se comprenden por el atributo de clase (.container).
- Selector de ID: en estos comprendemos por su único atributo  ID (#encabezado-principal).

###### Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y estilos externos (external) en CSS. Indicar cuál de los tres estilos es el recomendado usar y por qué.
<p>
bueno la diferencia de los diferentes estilos es que el (inline) se aplica directamente sobre la línea de código. Los estilos (embedded) son los que se aplicaria directamente en el archivo html y los estilos (external), son los que se usan en un archivo aparte se enlazan con el html. y el mas usado y se recomienda usar es el external por que nos permite tener mejor mantenimiento y consistencia, también por rendimiento y reusabilidad.
</p>

 ###### ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?
<p>
Bueno Flexbox, o el modelo de caja flexible, es una herramienta de diseño de páginas web que nos facilita la disposición de elementos en un contenedor de manera eficiente, incluso cuando su tamaño es desconocido o dinámico. 
Y se utiliza como contenedor flexible (conocido como flex container) y sus hijos (flex items). Y cuando aplicamos display: flex a un elemento, y se conviertes en un contenedor flex, y sus hijos directos se convierten automáticamente en elementos flexibles.
</p>
###### Explicar cómo se emplean las propiedades flexbox y explicar la función de las principales propiedades en la creación de diseños flexibles.
<p>
Entonces podemos decir que flexbos es un modelo de diseño en css que nos proporciona una forma mas eficiente y predeccible de organizar elementos en un contenedor ya que sus tamaños son desconcidos o dinámicos
especialmente cuando sus tamaños son desconocidos o dinámicos. 
ejemplo:
</p>

```
.contenedor-flex {
    display: flex;
    justify-content: space-around; /* Espaciado uniforme entre tarjetas */
    align-items: center;          /* Alineación vertical al centro */
}

.tarjeta {
    flex: 1;                      /* Cada tarjeta crece para ocupar un espacio igual */
    margin: 10px;                 /* Margen alrededor de cada tarjeta */
    padding: 20px;                /* Espaciado interno dentro de las tarjetas */
    border: 1px solid #ccc;       /* Borde para las tarjetas */
    text-align: center;           /* Texto alineado al centro */
}
```


######  ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?
<p>
CSS Grid Layout, es un sistema de diseño bidimensional que nos permite a los desarrolladores crear complejas estructuras de diseño web con filas y columnas. 
que a diferencia de Flexbox, que es principalmente unidimensional y aunque puede manejar dos dimensiones, su enfoque principal es ya sea filas o columnas, Grid está diseñado para trabajar con dos dimensiones simultáneamente. también Grid es más adecuado para diseños complejos y de mayor escala como el diseño general de una página, mientras que Flexbox es ideal para componentes y elementos más pequeños dentro de esos diseños (como barras de navegación, elementos de un formulario, etc.).
</p>
###### Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.
- ejemplo:

```
.grid-container {
    display: grid;
    grid-template-columns: auto auto auto; /* Tres columnas de igual ancho */
    grid-template-rows: auto auto;         /* Dos filas */
    gap: 10px;                             /* Espaciado entre celdas */
    padding: 10px;
}

.grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    text-align: center;
}
```


###### ¿Qué significa el diseño responsivo en el contexto del desarrollo web?

<p>
El diseño responsivo, o diseño web adaptable, es la manera en que el desarrollo web, busca asegurar que las páginas web funcionen bien en una variedad de dispositivos y tamaños de pantalla. ya que su idea central del diseño responsivo es crear sitios web que proporcionen una experiencia de usuario óptima en términos de lectura, navegación y uso interactivo, sin necesidad de redimensionar, hacer zoom o desplazarse en exceso, independientemente del dispositivo utilizado.
</p>

###### Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño responsivo en una página web.

- Media Queries en CSS: Las Media Queries son una de las herramientas más poderosas para crear diseños responsivos. 
- Diseño Fluid Grid: En vez de utilizar medidas fijas (como píxeles o puntos), el diseño fluid grid utiliza porcentajes y unidades relativas (como EM o REM) para definir el ancho y el margen de los elementos.
- Imágenes y Contenidos Flexibles: Para que las imágenes y otros contenidos multimedia se adapten a diferentes tamaños de pantalla, se utilizan técnicas para hacerlos flexibles.


# MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM
###### ¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación web?
<p>
El DOM es un puente entre el contenido web (HTML y XML) y los lenguajes de programación, lo que permite la creación de experiencias web ricas y dinámicas.
</p>

###### ¿Cuál es la diferencia entre el DOM y el HTML en una página web?
<p>
la direfencia entre el DOM y HTML: es que el DOM es una representación en tiempo de ejecución del HTML, pero en forma de un árbol de objetos que el navegador puede entender y manipular. Y el HTML es un lenguaje de marcado utilizado para crear y estructurar el contenido en la web.
</p>

###### ¿Porqué es importante entender y manipular el DOM en el desarrollo web Frontend?
<p>
Porque nos permite interactividad  y experiencia de usuario dandole dinamismo  y mejoramos la UX como dando click  y desplazamiento.También nos permite actualizaciones del contenido dinamico; bueno también en la se puede modificar los estilos eso si no me sabia jajajajja.
</p>

###### ¿Qué son los eventos del DOM y cuál es su función en una página web?
<p>
los eventos del DOM son notificaciones que se envian para señalar que algo a ocurrido en la pág web y estos eventos puede ser iniciados por el usuario con un click, desplazamientos, etc.
</p>
**Su Función es:**
- interactividad
- manipulacion de contenido.
- validacion de formularios.
- animaciones y efectos visauales
- comunicacion entre componentes.
- mejora la accesibilidad.

###### Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o DOMContentLoad”.
- ejemplo 1-click:
```
document.getElementById('miBoton').addEventListener('click', function() {
    alert('¡Botón clickeado!');
});
```
- ejemplo 2-submit:

```
<form id="miFormulario">
    <input type="text" required>
    <input type="submit" value="Enviar">
</form>


```
- ejemplo 3-load:

```
document.addEventListener('DOMContentLoaded', function() {
    alert('¡El DOM está completamente cargado y analizado!');
});
```


###### ¿Por qué es importante manejar eventos en la interacción usuario-web y cómo se añaden controladores de eventos a los elementos del DOM?
<p>
Es importante las interaciones del Dom porque nos permiten la interacion usuario-web, haciendo que las interfaces sean interactivas y dinámicas. 
</p>
- ejemplo de controlador de eventos en el html: 

```
<button onclick="miFuncion()">Haz Click Aquí</button>
```
- ejemplo de controlador de eventos en el dom: 
```
document.getElementById('miBoton').onclick = miFuncion;
```
###### Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript.
- getElementById: Este método los usamos para seleccionar un elemento por su atributo id. Es uno de los métodos más comun para acceder a un elemento específico.
- getElementsByClassName: Este nos selecciona una lista de elementos que comparten una misma clase CSS. Retorna un HTMLCollection de todos los elementos que tienen la clase especificada.
- querySelector y querySelectorAll: Este nos  Retorna el primer elemento que coincide con un selector CSS específico.

###### ¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript?
- ejemplo de como se crea y se agrega
- creando elemento

```
const nuevoElemento = document.createElement('div');
```
- Añadiendo Contenido al Elemento.

```
nuevoElemento.textContent = '¡Hola, Mundo!';
// O
nuevoElemento.innerHTML = '<strong>¡Hola, Mundo!</strong>';

```
- Agregar el Nuevo Elemento al DOM

```
contenedor.appendChild(nuevoElemento);
```
- Y si quieres  insertarlo antes de otro elemento específico dentro del contenedor, utilizas insertBefore.

```
const elementoReferencia = document.getElementById('elementoReferencia');
contenedor.insertBefore(nuevoElemento, elementoReferencia);

```

###### ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web dinámicas e interactivas?
<p>
Que nos permite respuestas de acciones del ususario y tambien nos dan por decirlo asi un feedback inmediato de esas acciones del usuario. Manejo de actualizacion de contenido en tiempo real por la carga de contenido dinamico. tambien nos permite la integracion de tecnologia web y APIS
</p>

###### Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto de eventos del DOM.
- EVENT BUBBLING
<p>
 Event bubbling (propagación de eventos) es un mecanismo por el cual un evento activado en un elemento específico se propaga hacia arriba a través del árbol del DOM, pasando por cada uno de los ancestros del elemento. Por ejemplo, si haces clic en un botón que está dentro de un div, que a su vez está dentro de otro div, un evento de clic iniciado en el botón se propagará primero al div padre inmediato y luego al siguiente, y así sucesivamente hasta llegar al objeto document.
</p>
- EVENT DELEGATION
<p>
 Event delegation es una técnica que aprovecha el bubbling de eventos para manejar eventos en un nivel superior en el DOM en lugar de en el propio elemento donde ocurre el evento.
 En lugar de asignar un manejador de eventos a cada elemento individual, asignas un único manejador a un elemento ancestro. Este manejador luego puede decidir qué acción tomar basándose en el origen del evento, generalmente inspeccionando el objeto de evento para determinar cuál fue el elemento específico que disparó el evento.
</p>

###### ¿Por qué son relevantes los conceptos “event bubbling” y “event delegation” en la gestión de eventos en páginas web con múltiples elementos interactivos?
<p>
estos dos conceptos son relevantes en la gestión de eventos en páginas web con múltiples elementos interactivos ya nos permiten eficiencia, rendimiento, mantenimiento y escalabilidad
</p>

# MÓDULO SOBRE COMUNICACIÓN CON EL SERVIDOR (STORAGE, PROMESAS, ASINCRONÍAS Y PETICIONES HTTPS)

######  Definir brevemente el concepto de localStorage y sessionStorage. 
- localStorage: proporciona una forma de almacenar datos de manera persistente en el navegador del usuario. Los datos almacenados en localStorage permanecen disponibles incluso después de cerrar y reabrir el navegador.
- sessionStorage: almacena datos solo durante la duración de la página o sesión actual. Los datos almacenados en sessionStorage se borran automáticamente cuando se cierra la pestaña o la ventana del navegador.

entonces podemos decir que localstorage guarda info que se ve incluso del lado del usuario o cliente, mientras que sessionstorage guarda los datos mientras estes en la pag ya que se borran apenas se cierre la pag.

###### Describir las diferencias claves entre localStorage y sessionStorage.
<p>
buena en la pregunta anterios respondi como su diferencia mas notoria, pero tambien se puede decir que en localstorage guarda datos en memoria y persisten en el mismo origen ya sea host y puerto. y sessionstorage su almacenamiento es limitado solo en la pestaña donde esta ubicado y no persiste en el origen.
</p>

###### ¿Por qué son útiles para almacenar datos en el navegador y cuál es su límite de capacidad?

<p>
El almacenamiento de datos en el navegador es una herramienta muy buena para mejorar la experiencia de usuario, la eficiencia y el rendimiento de las aplicaciones web. Sin embargo, es importante tener en cuenta las limitaciones de capacidad y seguridad al utilizar estos mecanismos como que su capapcidad limite de ambos suele ser de alrededor de 5 MB por dominio, aunque esto puede variar ligeramente entre diferentes navegadores. Encuanto a limites de seguridad  debido a que el almacenamiento web es accesible a través de JavaScript, es importante no almacenar datos sensibles o personales que podrían ser expuestos a ataques de scripts cruzados.
</p>

###### . ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?

<p>
Las promesas en JavaScript son un mecanismo para manejar operaciones asincrónicas, proporcionando una manera más limpia y eficiente de trabajar con acciones que tomarán tiempo en completarse, como la recuperación de datos de una API,  o cualquier otra tarea que dependa de la espera de un resultado.
Son particularmente útiles para solicitudes de red, como trabajar con APIs o cargar recursos externos. Por ejemplo, con la API fetch para realizar solicitudes HTTP.
</p>

###### Explica el concepto de asincronía en programación y cómo las promesas ayudan a manejar operaciones asincrónicas.

<p>
las Promesas asincronicas son esas peticiones que se le hacen y que no se sabe cuando van a retornar una respuesta  indeterminada para completarse, como solicitudes de red. Estas nos ayudan a manejar esa peticiones a APIs como el get, post, delete.
</p>
###### Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación asincrónica, como una solicitud de red.
- ejemplo:

```
document.getElementById('cargarDatos').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            mostrarDatos(data);
        })
        .catch(error => {
            console.error('Error en la operación:', error);
        });
});

function mostrarDatos(data) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<ul>' + data.map(post => `<li>${post.title}</li>`).join('') + '</ul>';
}
```

###### ¿Qué es JSON Server y cómo se utiliza en el desarrollo web?

<p>
Bueno para mi el JSON server es una herramienta ideal para simular una base datos como tipo back-end simple y rápido para pruebas o desarrollo de aplicaciones front-end. Y su uso y configuración lo convierte en una elección popular para simular APIs y trabajar con datos en un entorno de desarrollo local.
se utuliza haciendole creando un archivo y se le puede realizar solicitudes HTTP (GET, POST, PUT, DELETE, etc.
</p>
- ejemplo:

```
{
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
}
```
###### ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?

<p>
Es util porque simulamos una base de datos en un desarrollo local, se pueden hacer pruebas controladas permitiendonos una implementacion del backend sin tener uno finalizado.
</p>


###### ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y las palabras claves async/await?
<p>
bueno las diferecias que hay entre async/await estamos haciendo peticiones a una APIs ya sea de get, post, delete, etc.
y el manejo de  .then().catch() es un metodo de manejador de promesas pero de promesas exitosas y errores, pero se maneja fuera de async/await.
pero se maneja como el programdor considere mejor.
</p>
###### Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella.
- ejemplos: 

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "text": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
GET

```
fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => console.log(data));
```
POST

```
fetch('http://localhost:3000/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Nuevo Post', author: 'Autor' }),
})
.then(response => response.json())
.then(data => console.log(data));
```
PUT

```
fetch('http://localhost:3000/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Post Actualizado', author: 'Otro Autor' }),
})
.then(response => response.json())
.then(data => console.log(data));
```
PATCH

```
fetch('http://localhost:3000/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ author: 'Nuevo Autor' }),
})
.then(response => response.json())
.then(data => console.log(data));
```
DELETE

```
fetch('http://localhost:3000/posts/1', {
  method: 'DELETE',
})
.then(response => response.json())
.then(() => console.log('Post eliminado'));
```
###### Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes HTTP en JavaScript.
** Fetch:**
-  Es Nativo y Sin Dependencias.
- Manejo Manual de Errores,
- Sin Soporte para Tiempos de Espera (Timeouts).

**Axios**
- Soporte para Navegadores Antiguos.
- Interceptores de Solicitudes y Respuestas.
- Manejo Automático de Errores HTTP.
- Soporte para Tiempos de Espera (Timeouts).

###### ¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?
- porque nos permite comunicr con un servidor.
- arquitecturas basada en APIs.
- aplicaciones de página unica.
- rendimiento y optimizacion.
- seguridad.
- desarrollo y mantenimiento.

###### Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y POST.
- ejemplos: 
get

```
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
```
post

```
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Fetch error:', error));
```
get axios
```
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.error('Axios error:', error));
```
post

```
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
.then(response => console.log(response.data))
.catch(error => console.error('Axios error:', error));
```

###### Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo web.
<p>
Es im portante el manejo de errores efectivo y bien pensado para crear aplicaciones web fiables y de alta calidad. Asegura que la aplicación pueda manejar y recuperarse de errores de manera armonica, proporcionando una experiencia de usuario fluida y segura, y facilitando el desarrollo y mantenimiento del código.
</p>
###### Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.

Bueno una promesa en JavaScript es un objeto que representa la eventual finalización o fracaso de una operación asincrónica. Cada promesa pasa por varios estados:

- Pendiente (Pending): Estado inicial, no cumplida ni rechazada.
- Cumplida (Fulfilled): La operación se completó exitosamente.
- Rechazada (Rejected): La operación falló.

- ejemplo:

```
async function miFuncionAsincrona() {
  try {
    let resultado = await miPromesa();
    // Manejar resultado exitoso
  } catch (error) {
    // Manejar el error
    console.error('Error en la promesa:', error);
  }
}
```
###### ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y la estructura try/catch?
** .then().catch()**
se utiliza específicamente con promesas. Es la forma estándar de manejar el flujo asincrónico y los errores en operaciones basadas en promesas. Y nos permite encadenar múltiples operaciones asincrónicas. Un .then() puede ser seguido por otro .then(), y finalmente por un .catch() que manejará cualquier error ocurrido en la cadena.

**try/catch**
se utiliza en bloques de código sincrónicos y se ha extendido al manejo de promesas con la introducción de async/await. Y dentro de una función async, puedes usar try/catch para capturar errores tanto de operaciones sincrónicas como asincrónicas.

###### Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar una solicitud de red.
- ejemplo:

```
const axios = require('axios'); // Importar Axios (asegúrate de tenerlo instalado)

async function realizarSolicitud() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/nonexistent');
    
    // Verificar si la respuesta es exitosa
    if (response.status !== 200) {
      throw new Error('La solicitud no fue exitosa: ' + response.statusText);
    }
    
    const data = response.data;
    
    // Lógica para procesar los datos exitosamente
    console.log('Datos obtenidos:', data);
  } catch (error) {
    // Manejo de errores
    console.error('Error en la solicitud:', error.message);
  }
}

// Llamar a la función para realizar la solicitud
realizarSolicitud();

```




















