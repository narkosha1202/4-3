document.getElementById("speakButton").addEventListener("click", function () {
    const text = document.getElementById("textInput").value;
    const language = document.getElementById("languageSelect").value;

    if (text.trim() === "") {
        alert("Iltimos, matn kiriting!");
        return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;

    speechSynthesis.speak(speech);
});