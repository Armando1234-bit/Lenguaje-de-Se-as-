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
