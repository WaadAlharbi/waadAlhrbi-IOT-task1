click_to_convert.addEventListener('click',function(){
  // new speech recognition object
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  // Set the properties for the Speech Recognition object
  recognition.interimResults = true;
  //language
  recognition.lang="ar";
  recognition.lang = document.getElementById("la").value;

  // This runs when the speech recognition service returns result
  recognition.addEventListener('result', e=>{
    const transcript = Array.from(e.results)
    .map(result =>result[0])
    .map(result =>result.transcript)
    convert_text.innerHTML = transcript;
  })
  // start recognition
  if(speech == true){
    recognition.start();
  }
})
