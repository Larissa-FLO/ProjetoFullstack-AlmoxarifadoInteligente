import { useEffect } from 'react';

const CorInput = () => {
    useEffect(() => {
        const inputsNumber = document.querySelectorAll("input[type=number]");
        const inputsDate = document.querySelectorAll("input[type=date]");
        const listSelect = document.querySelectorAll("select");

        const focusHandler = (campo) => {
            campo.style.backgroundColor = "#c5e3cd";
        };

        const blurHandler = (campo) => {
            campo.style.backgroundColor = "white";
        };

        inputsNumber.forEach(function(campo) {
            campo.addEventListener('focus', () => focusHandler(campo));
            campo.addEventListener('blur', () => blurHandler(campo));
        });

        inputsDate.forEach(function(campo) {
            campo.addEventListener('focus', () => focusHandler(campo));
            campo.addEventListener('blur', () => blurHandler(campo));
        });

        listSelect.forEach(function(campo) {
            campo.addEventListener('focus', () => focusHandler(campo));
            campo.addEventListener('blur', () => blurHandler(campo));
        });

        // Remove os event listeners quando o componente for desmontado
        return () => {
            inputsNumber.forEach(function(campo) {
                campo.removeEventListener('focus', () => focusHandler(campo));
                campo.removeEventListener('blur', () => blurHandler(campo));
            });

            inputsDate.forEach(function(campo) {
                campo.removeEventListener('focus', () => focusHandler(campo));
                campo.removeEventListener('blur', () => blurHandler(campo));
            });

            listSelect.forEach(function(campo) {
                campo.removeEventListener('focus', () => focusHandler(campo));
                campo.removeEventListener('blur', () => blurHandler(campo));
            });
        };
    }, []); // O array vazio garante que o useEffect só será executado uma vez, quando o componente for montado

    return null; // Este componente não renderiza nada, só adiciona os event listeners
};

export default CorInput;
