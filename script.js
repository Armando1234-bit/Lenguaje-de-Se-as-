const startButton = document.getElementById("start");
const textOutput = document.getElementById("textOutput");

// Verificar si el navegador soporta reconocimiento de voz
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = "es-ES"; // Idioma español

  // Iniciar grabación cuando se presiona el botón
  startButton.addEventListener("click", () => {
    recognition.start();
    textOutput.innerText = "Escuchando...";
  });

  // Cuando se reconoce algo, se muestra el texto
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textOutput.innerText = `Texto reconocido: ${transcript}`;
  };

  // Manejar errores
  recognition.onerror = (event) => {
    textOutput.innerText = "Error: " + event.error;
  };
} else {
  textOutput.innerText = "Tu navegador no soporta el reconocimiento de voz.";
}
