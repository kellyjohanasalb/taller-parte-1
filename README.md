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
