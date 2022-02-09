var SpeechRecognition = window.webkitSpeechRecognition;

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "Welcome to Image Recognition. This Model is trained the following Objects : Father,Mother and Me";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

window.onload = function() {
    speak();
}

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version;',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S4vn98qIY/model.json',modelLoaded);