(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{762:function(a,e,s){"use strict";s.r(e);var r=s(44),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"variables-y-subexpresiones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables-y-subexpresiones"}},[a._v("#")]),a._v(" Variables y Subexpresiones")]),a._v(" "),s("p",[a._v("En Nushell hay dos tipos de expresiones de evaluación: variables y subexpresiones. Cuando lees expresiones que empiezan con el signo dólar ("),s("code",[a._v("$")]),a._v(") sabes que trabajas con una expresión de evaluación. Esto indica que cuando Nushell toma el valor en esta posición, necesitará ejecutar un paso de evaluación para procesar la expresión y posterioremente usar el valor del resultado. Ambas formas de expresión de evaluación soportan un modo simple y una forma ruta ("),s("code",[a._v("path")]),a._v(") para trabajar con datos más complejos.")]),a._v(" "),s("h2",{attrs:{id:"variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[a._v("#")]),a._v(" Variables")]),a._v(" "),s("p",[a._v("La variable es el más simple de ambas expresiones de evaluación. Durante la evaluación, una variable es remplazada for su valor.")]),a._v(" "),s("p",[a._v("Si creamos una variable, podemos imprimir su contenido al usar "),s("code",[a._v("$")]),a._v(" para referir a la misma:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> let mi-valor = 4\n> echo $mi-valor\n4\n")])])]),s("h2",{attrs:{id:"variables-rutas-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables-rutas-paths"}},[a._v("#")]),a._v(" Variables rutas (paths)")]),a._v(" "),s("p",[a._v("Una variable ruta funciona al llegar dentro del contenido de una variable, navegando columnas dentro de la misma para alcanzar un valor final. Supongamos que en vez de "),s("code",[a._v("4")]),a._v(", hayamos asignado una tabla como valor:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> let mi-valor = [[nombre]; [pruebausuario]]\n")])])]),s("p",[a._v("Podemos usar variables ruta para evaluar la variable "),s("code",[a._v("$mi-valor")]),a._v(" y obtener el valor de la columna "),s("code",[a._v("nombre")]),a._v(" con un solo paso:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> echo $mi-valor.nombre\npruebausuario\n")])])]),s("h2",{attrs:{id:"subexpresiones"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subexpresiones"}},[a._v("#")]),a._v(" Subexpresiones")]),a._v(" "),s("p",[a._v("Siempre puedes evaluar subexpresiones y usar su resultado envolviendo la expresión entre paréntesis "),s("code",[a._v("()")]),a._v(".")]),a._v(" "),s("p",[a._v("Los paréntesis contienen una tubería que se ejecutará hasta completar, y su valor final será usado. Por ejemplo, "),s("code",[a._v("(ls)")]),a._v(" ejecutaría el comando "),s("code",[a._v("ls")]),a._v(", devolviendo como resultado la tabla y "),s("code",[a._v("(git branch --show-current)")]),a._v(" ejecutará el comando externo git y devolver una cadena con el nombre de la rama actual. También puedes usar paréntesis para ejecutar expresiones matemáticas como "),s("code",[a._v("(2 + 3)")]),a._v(".")]),a._v(" "),s("p",[a._v("Subexpresiones también pueden ser tuberías y no solamente comandos individuales. Si desearamos una lista de nombres de archivos superiores a diez kilobytes, podemos utilizar subexpresiones para ejecutar una tubería y asignar el resultado a una variable:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> let nombres-de-archivos-grandes = (ls | where size > 10kb)\n> echo $nombres-de-archivos-grandes\n───┬────────────┬──────┬──────────┬──────────────\n # │    name    │ type │   size   │   modified   \n───┼────────────┼──────┼──────────┼──────────────\n 0 │ Cargo.lock │ File │ 155.3 KB │ 17 hours ago \n 1 │ README.md  │ File │  15.9 KB │ 17 hours ago \n───┴────────────┴──────┴──────────┴──────────────\n")])])]),s("h2",{attrs:{id:"subexpresiones-y-rutas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subexpresiones-y-rutas"}},[a._v("#")]),a._v(" Subexpresiones y rutas")]),a._v(" "),s("p",[a._v("Subexpresiones también soportan rutas. Por ejemplo, supongamos que queremos una lista de nombres de archivos en el directorio actual. Una manera de hacerlo es con una tubería:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> ls | get name\n")])])]),s("p",[a._v("Pero también podemos hacer una acción similar con un solo paso usando una subexpresión de ruta:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> echo (ls).name\n")])])]),s("p",[a._v("Todo depende de las necesidades del código o estilo particular que trabaje mejor para ti.")])])}),[],!1,null,null,null);e.default=o.exports}}]);