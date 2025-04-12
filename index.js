document.getElementById("speakButton").addEventListener("click", function() {
    const text = document.getElementById("textInput").value;
    const language = document.getElementById("languageSelect").value; 

    if (text.trim() === "") {
        alert("Iltimos, matn kiriting!");
        return;
    }

    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = language;

        speechSynthesis.speak(speech);
    } else {
        alert("Brauzeringiz Speech Synthesis API-ni qo'llab-quvvatlamaydi.");
    }
});