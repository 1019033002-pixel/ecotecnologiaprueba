/* =========================================================
   ECOTECNOLOGÍA
   JavaScript general
   ========================================================= */


/* ================= CARGAR PÁGINA ================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Ecotecnología cargada correctamente.");

    iniciarMenuMovil();

    iniciarFormulario();

    iniciarAnimaciones();

});


/* =========================================================
   MENÚ
   ========================================================= */

function iniciarMenuMovil() {

    const dropdown = document.querySelector(".dropdown");

    const boton = document.querySelector(".dropbtn");

    if (!dropdown || !boton) {
        return;
    }

    boton.addEventListener("click", function (event) {

        event.stopPropagation();

        dropdown.classList.toggle("activo");

    });


    document.addEventListener("click", function () {

        dropdown.classList.remove("activo");

    });

}


/* =========================================================
   FORMULARIO
   ========================================================= */

function iniciarFormulario() {

    const formulario = document.querySelector(".contact-form");

    if (!formulario) {
        return;
    }


    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const nombre = document
            .getElementById("nombre")
            ?.value
            .trim();


        const correo = document
            .getElementById("correo")
            ?.value
            .trim();


        if (!nombre || !correo) {

            alert(
                "Por favor completa tu nombre y correo electrónico."
            );

            return;

        }


        alert(
            "¡Gracias, " +
            nombre +
            "! Tu mensaje fue registrado correctamente."
        );


        formulario.reset();

    });

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
   ========================================================= */

function iniciarAnimaciones() {

    const elementos = document.querySelectorAll(
        ".card, .technology-card, .step, .result"
    );


    if (!elementos.length) {
        return;
    }


    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elementos.forEach(function (elemento) {

        elemento.classList.add("animar");

        observador.observe(elemento);

    });

}


/* =========================================================
   MENSAJE DE CONFIRMACIÓN
   ========================================================= */

function mostrarMensaje(mensaje) {

    alert(mensaje);

}
