const button = document.getElementById('start-recording');
const outputDiv = document.getElementById('output');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = true;

button.onclick = function() {
    recognition.start();
};

recognition.onresult = function(event) {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
    }
    outputDiv.innerHTML = transcript;
    displaySignImages(transcript);
};

recognition.onerror = function(event) {
    console.error('Error de reconocimiento:', event.error);
};

function displaySignImages(text) {
    const letters = text.toUpperCase().split('');
    outputDiv.innerHTML = ''; // Limpiar el área de salida
    letters.forEach(letter => {
        const img = document.createElement('img');
        img.src = `./assets/${letter}.jpg`; // Asegúrate de que las imágenes están en la carpeta de assets
        img.alt = `Seña de la letra ${letter}`;
        outputDiv.appendChild(img);
    });
}
