# Programación Web I - Proyecto Alicia en el País de las Maravillas

* **Nombre del estudiante:** Rocio Noelia Cespedes Callizaya
* **Fecha de entrega:** 28/10/2026
* **Enlace de la página publicada:** 
* **Enlace del repositorio Git:** 
* **Enlace del video (máximo 3 minutos):** 

---

## 📌 Explicación del Código

### Algoritmos, Variables y Funciones Utilizadas
* **Variables (`let` y `const`):** Se utiliza `const` para referencias permanentes al DOM (formularios y divs de resultado) y precios fijos. Se utiliza `let` para acumular sumas, contadores dinámicos e iteradores dentro de bucles.
* **Operadores:** 
  * *Aritméticos:* `*`, `/`, `-`, `+` para conversiones monetarias y reducciones.
  * *Módulo (`%`):* Para determinar la paridad (`i % 2 === 0`).
  * *Relacionales y Lógicos:* `>`, `<`, `<=`, `>=`, `&&`, `||` para validar campos en rango.
* **Funciones del DOM y Eventos:**
  * `document.getElementById('id'):` Permite seleccionar elementos HTML específicos para manipular su contenido o leer datos.
  * `.value:` Captura la cadena ingresada por el usuario en las cajas de texto o listas de selección.
  * `.innerHTML` / `.textContent:` Inyecta la respuesta calculada directamente en el área de resultados sin recargar la pantalla.
  * `addEventListener("submit", callback)` y `e.preventDefault():` Escucha el envío del formulario e interrumpe el evento submit por defecto del navegador para procesar el formulario con JS de forma asíncrona.

### Estructuras de Control Aplicadas
* **Condicionales (`if / else if / else`):** Aplicados en el Ejercicio 1 para validar que los ml de poción estén entre 0 y 90 y comprobar si la altura final es menor o igual a 50 cm.
* **Selección múltiple (`switch`):** Aplicado en el Ejercicio 2 para hacer un mapeo limpio y directo entre el valor de la bebida seleccionada y su precio unitario en Bs.
* **Repetitivas (`for`):** Aplicado en el Ejercicio 3 para realizar un bucle ordenado desde $i = 1$ hasta $N$ (donde $N$ es la cantidad de cartas digitadas).

---

## 🧪 Resumen de Casos de Prueba

### Ejercicio 1: La poción mágica de Alicia
Solicita la altura inicial de Alicia y la cantidad de poción consumida (ml), calculando su nueva altura para evaluar si atraviesa una puerta de 50 cm.
* **Prueba 1:** Altura: 150, Poción: 70 ➔ *Resultado:* Nueva altura: 45.00 cm — ¡PUEDE pasar! (Pasa: Sí)
* **Prueba 2:** Altura: 160, Poción: 50 ➔ *Resultado:* Nueva altura: 80.00 cm — NO puede pasar (Pasa: Sí)
* **Prueba 3:** Altura: -10, Poción: 20 ➔ *Resultado:* Error: La altura debe ser un número positivo (Pasa: Sí)
* **Prueba 4:** Altura: 100, Poción: 100 ➔ *Resultado:* Error: Poción debe estar entre 0 y 90 ml (Pasa: Sí)
* **Prueba 5:** Altura: `""` (vacío), Poción: 30 ➔ *Resultado:* Error: Todos los campos son obligatorios (Pasa: Sí)

### Ejercicio 2: La merienda del Sombrerero Loco
Permite ingresar invitado, bebida (vía `switch`) y tazas, aplicando un 10% de descuento si supera las 5 tazas.
* **Prueba 1:** Alicia / Té de Jazmín / 4 ➔ *Resultado:* Total: 48.00 Bs (Pasa: Sí)
* **Prueba 2:** Sombrerero / Café / 6 ➔ *Resultado:* Total: 81.00 Bs (Pasa: Sí)
* **Prueba 3:** Conejo / (Sin seleccionar) / 2 ➔ *Resultado:* Error: Debe seleccionar un tipo de bebida (Pasa: Sí)
* **Prueba 4:** Gato / Chocolate / 0 ➔ *Resultado:* Error: Tazas debe ser positivo entre 1 y 20 (Pasa: Sí)
* **Prueba 5:** `""` (Vacío) / Infusión / 3 ➔ *Resultado:* Error: Debe ingresar el nombre del invitado (Pasa: Sí)

### Ejercicio 3: El desafío de la Reina de Corazones
Recorre una secuencia numérica mediante un ciclo `for` para clasificar pares e impares, sumar sus valores y dictaminar qué grupo obtuvo mayor puntaje.
* **Prueba 1:** Cartas: 5 ➔ *Resultado:* IMPAR suma mayor (9 vs 6) (Pasa: Sí)
* **Prueba 2:** Cartas: 4 ➔ *Resultado:* PAR suma mayor (6 vs 4) (Pasa: Sí)
* **Prueba 3:** Cartas: 0 ➔ *Resultado:* Error: Ingrese un número entero válido entre 1 y 50 (Pasa: Sí)
* **Prueba 4:** Cartas: 60 ➔ *Resultado:* Error: Ingrese un número entero válido entre 1 y 50 (Pasa: Sí)
* **Prueba 5:** Cartas: 1 ➔ *Resultado:* IMPAR suma mayor (1 vs 0) (Pasa: Sí)

---

## 📷 Capturas de Interfaz

![Ejercicio 1]()

![Ejercicio 1]()

![Ejercicio 1]()
