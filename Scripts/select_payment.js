document.addEventListener("DOMContentLoaded", function () {
    
    const DOM = {
        inputs: document.querySelectorAll('input'),
        radio_inputs: document.querySelectorAll('input[type="radio"]'),
        input_tarjeta: document.querySelector('#tarjeta_credito'),
    };
    
    function comprobarPago() {
        const pagoSeleccionado = Array.from(DOM.radio_inputs).find((input) => input.checked);

        if (pagoSeleccionado && pagoSeleccionado.labels && pagoSeleccionado.labels[0]) {
            const labelPago = pagoSeleccionado.labels[0].textContent;

            if (labelPago !== "PayPal" || labelPago.trim() === "") {
                DOM.input_tarjeta.style.display = "flex";
            } else {
                DOM.input_tarjeta.style.display = "none";
            }
        } else {
            DOM.input_tarjeta.style.display = "none";
        }
    }

    function addEventListenerPago() {
        DOM.inputs.forEach((input) => {
            if (input.type === 'radio') {
                input.addEventListener('change', comprobarPago);
            }
        });
    }

    const iniciar = () => {
        addEventListenerPago();
    };

    window.addEventListener("load", iniciar, false);
});