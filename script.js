// script.js

// Función para encriptar el texto
function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('resultText').value = encryptedText;
}

// Función para desencriptar el texto
function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('resultText').value = decryptedText;
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
}
