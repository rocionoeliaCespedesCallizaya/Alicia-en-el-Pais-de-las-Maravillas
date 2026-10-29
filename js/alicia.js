document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // EJERCICIO 1: LA POCIÓN MÁGICA DE ALICIA
    // =========================================================================
    const formPocion = document.getElementById("formPocion");
    const resultadoPocion = document.getElementById("resultadoPocion");

    formPocion.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que la página se recargue

        // Captura de entradas
        const txtAltura = document.getElementById("alturaInicial").value.trim();
        const txtPocion = document.getElementById("cantidadPocion").value.trim();

        // Validación de campos vacíos
        if (txtAltura === "" || txtPocion === "") {
            mostrarResultado(resultadoPocion, " Error: Todos los campos son obligatorios.", false);
            return;
        }

        const altura = parseFloat(txtAltura);
        const pocion = parseFloat(txtPocion);

        // Validaciones numéricas y rangos
        if (isNaN(altura) || isNaN(pocion)) {
            mostrarResultado(resultadoPocion, " Error: Debe ingresar valores numéricos válidos.", false);
            return;
        }

        if (altura <= 0) {
            mostrarResultado(resultadoPocion, " Error: La altura inicial debe ser un número positivo mayor a 0.", false);
            return;
        }

        if (pocion < 0 || pocion > 90) {
            mostrarResultado(resultadoPocion, " Error: La cantidad de poción debe estar entre 0 y 90 ml.", false);
            return;
        }

        // Procesamiento mediante función propia
        const calculo = procesarPocion(altura, pocion);

        // Salida de resultados
        let msj = `<strong>Altura Inicial:</strong> ${altura.toFixed(1)} cm<br>`;
        msj += `<strong>Poción Consumida:</strong> ${pocion} ml<br>`;
        msj += `<strong>Nueva Altura:</strong> ${calculo.nuevaAltura.toFixed(2)} cm<br>`;
        msj += `<strong>Diagnóstico:</strong> ${calculo.mensaje}`;

        mostrarResultado(resultadoPocion, msj, calculo.puedePasar);
    });

    /**
     * Calcula la nueva altura y evalúa si pasa por la puerta (Fija en 50 cm)
     */
    function procesarPocion(alturaInicial, mlPocion) {
        const ALTURA_PUERTA = 50; // cm
        const nuevaAltura = alturaInicial * (1 - (mlPocion / 100));

        let puedePasar = false;
        let mensaje = "";

        if (nuevaAltura <= ALTURA_PUERTA) {
            puedePasar = true;
            mensaje = "¡Alicia ha encogido lo suficiente y PUEDE atravesar la puerta mágica!";
        } else {
            puedePasar = false;
            mensaje = "Alicia sigue siendo demasiado alta. NO puede atravesar la puerta (necesita medir 50 cm o menos).";
        }

        return { nuevaAltura, puedePasar, mensaje };
    }


    // =========================================================================
    // EJERCICIO 2: LA MERIENDA DEL SOMBRERERO LOCO
    // =========================================================================
    const formMerienda = document.getElementById("formMerienda");
    const resultadoMerienda = document.getElementById("resultadoMerienda");

    formMerienda.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombreInvitado").value.trim();
        const bebida = document.getElementById("tipoBebida").value;
        const txtTazas = document.getElementById("cantidadTazas").value.trim();

        // Validaciones
        if (nombre === "") {
            mostrarResultado(resultadoMerienda, " Error: Debe ingresar el nombre del invitado.", false);
            return;
        }

        if (bebida === "") {
            mostrarResultado(resultadoMerienda, " Error: Debe seleccionar un tipo de bebida.", false);
            return;
        }

        if (txtTazas === "") {
            mostrarResultado(resultadoMerienda, " Error: Debe ingresar la cantidad de tazas.", false);
            return;
        }

        const tazas = parseInt(txtTazas, 10);

        if (isNaN(tazas) || tazas <= 0 || tazas > 20) {
            mostrarResultado(resultadoMerienda, " Error: La cantidad de tazas debe ser un entero positivo entre 1 y 20.", false);
            return;
        }

        // Obtener Precio Unitario mediante switch
        let precioUnitario = 0;
        let nombreBebida = "";

        switch (bebida) {
            case "te":
                precioUnitario = 12;
                nombreBebida = "Té de Jazmín";
                break;
            case "cafe":
                precioUnitario = 15;
                nombreBebida = "Café del Sombrerero";
                break;
            case "infusion":
                precioUnitario = 10;
                nombreBebida = "Infusión de Rosas";
                break;
            case "chocolate":
                precioUnitario = 18;
                nombreBebida = "Chocolate Maravilla";
                break;
            default:
                mostrarResultado(resultadoMerienda, " Error: Opción de bebida no válida.", false);
                return;
        }

        // Cálculo con función
        const liquidacion = calcularCuenta(precioUnitario, tazas);

        // Salida
        let msj = `<strong>Invitado:</strong> ${nombre}<br>`;
        msj += `<strong>Bebida:</strong> ${nombreBebida}<br>`;
        msj += `<strong>Cantidad:</strong> ${tazas} tazas (Precio U.: ${precioUnitario} Bs)<br>`;
        msj += `<strong>Subtotal:</strong> ${liquidacion.subtotal.toFixed(2)} Bs<br>`;
        msj += `<strong>Descuento (10% por >5 tazas):</strong> -${liquidacion.descuento.toFixed(2)} Bs<br>`;
        msj += `<strong>Total a Pagar:</strong> ${liquidacion.total.toFixed(2)} Bs`;

        mostrarResultado(resultadoMerienda, msj, true);
    });

    /**
     * Calcula subtotal, descuento y total de la cuenta
     */
    function calcularCuenta(precioUnitario, cantidad) {
        const subtotal = precioUnitario * cantidad;
        let descuento = 0;

        // Condicional explicita para descuento
        if (cantidad > 5) {
            descuento = subtotal * 0.10;
        }

        const total = subtotal - descuento;
        return { subtotal, descuento, total };
    }


    // =========================================================================
    // EJERCICIO 3: EL DESAFÍO DE LA REINA DE CORAZONES
    // =========================================================================
    const formReina = document.getElementById("formReina");
    const resultadoReina = document.getElementById("resultadoReina");

    formReina.addEventListener("submit", function (e) {
        e.preventDefault();

        const txtCartas = document.getElementById("cantidadCartas").value.trim();

        if (txtCartas === "") {
            mostrarResultado(resultadoReina, " Error: Por favor ingrese la cantidad de cartas.", false);
            return;
        }

        const nCartas = parseInt(txtCartas, 10);

        if (isNaN(nCartas) || nCartas < 1 || nCartas > 50) {
            mostrarResultado(resultadoReina, " Error: Ingrese un número entero de cartas válido entre 1 y 50.", false);
            return;
        }

        // Procesamiento algorítmico mediante for en función externa
        const analisis = analizarCartas(nCartas);

        // Salida
        let msj = `<strong>Secuencia analizada:</strong> ${analisis.secuencia}<br>`;
        msj += `<strong>Cartas Pares:</strong> Cantidad = ${analisis.cantPares} | Suma = ${analisis.sumaPares}<br>`;
        msj += `<strong>Cartas Impares:</strong> Cantidad = ${analisis.cantImpares} | Suma = ${analisis.sumaImpares}<br>`;
        msj += `<strong>Dictamen de la Reina:</strong> ${analisis.ganador}`;

        mostrarResultado(resultadoReina, msj, true);
    });

    /**
     * Recorre con ciclo for del 1 a N, clasifica, cuenta y suma
     */
    function analizarCartas(totalCartas) {
        let cantPares = 0;
        let cantImpares = 0;
        let sumaPares = 0;
        let sumaImpares = 0;
        let listaNumeros = [];

        // Bucle FOR obligatorio
        for (let i = 1; i <= totalCartas; i++) {
            listaNumeros.push(i);

            if (i % 2 === 0) {
                cantPares++;
                sumaPares += i;
            } else {
                cantImpares++;
                sumaImpares += i;
            }
        }

        // Comparación de sumas
        let ganador = "";
        if (sumaPares > sumaImpares) {
            ganador = "El grupo PAR tiene la mayor suma (" + sumaPares + " vs " + sumaImpares + ").";
        } else if (sumaImpares > sumaPares) {
            ganador = "El grupo IMPAR tiene la mayor suma (" + sumaImpares + " vs " + sumaPares + ").";
        } else {
            ganador = "¡Empate absoluto! Ambos grupos suman exactamente lo mismo (" + sumaPares + ").";
        }

        return {
            secuencia: listaNumeros.join(", "),
            cantPares: cantPares,
            cantImpares: cantImpares,
            sumaPares: sumaPares,
            sumaImpares: sumaImpares,
            ganador: ganador
        };
    }


    // =========================================================================
    // FUNCIÓN AUXILIAR REUTILIZABLE PARA MOSTRAR MENSAJES EN EL DOM
    // =========================================================================
    function mostrarResultado(elementoDOM, mensaje, esExito) {
        elementoDOM.innerHTML = mensaje;
        elementoDOM.className = "caja-resultado " + (esExito ? "mensaje-exito" : "mensaje-error");
    }

});