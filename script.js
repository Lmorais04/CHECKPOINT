function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoElement = document.getElementById('resultado');

    if (!peso || !altura || isNaN(peso) || isNaN(altura)) {
        resultadoElement.textContent = 'Por favor, preencha os campos de peso e altura com valores numéricos.';
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    resultadoElement.textContent = `Seu IMC é ${imc}.`;

    if (imc < 18.5) {  
        resultadoElement.textContent += ' Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultadoElement.textContent += ' Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        resultadoElement.textContent += ' Sobrepeso I';
    } else if (imc >= 30 && imc <= 39.9) {
        resultadoElement.textContent += ' Obesidade II';
    } else if (imc >= 40) { 
        resultadoElement.textContent += ' Obesidade III';
    }
}

  