###MÓDULO SOBRE LÓGICA, LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CON JAVASCRIPT
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







