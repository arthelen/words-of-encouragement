// Volume slider code
document.querySelector("#volume").addEventListener("input", () => {
  // Get volume value from the input
  volume = document.querySelector("#volume").value;

  // Set volume property of the SpeechSynthesisUtterance instance
  utterance.volume = volume;
});

// This function "renders" some bit of text
// as audio to the user.
function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;
  // Changed value from 1 to volume for slider
  utterance.volume = volume;

  // Speak the utterance
  synthesis.speak(utterance);
}

function encourage() {
  // Get the name and words of encouragement
  let name = document.getElementById("name").value;
  let encouragement = document.getElementById("encouragement").value;
  // Additional postScript code
  let postScript = document.getElementById("post-script").value;
  
  // Combine those into some text
  let message = `Hello ${name}, I have something I would like to tell you. ${encouragement}. Have a nice day! And one more thing, ${postScript}!`

  // Render text to the user
  renderTTS(message);
}