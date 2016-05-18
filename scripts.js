
var message = prompt("Enter a word/phrase to translate: ");
var message = message.toLowerCase();


var alphabetCode = {
	'a': ".-", 'b': '-...', 'c': '-.-', 'd': '-..', 'e': '.',
	'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----',
}
var translate = "";
for(var i = 0; i < message.length; i++){
    var results = message.charAt(i);
    translate += alphabetCode[results];   
}


document.getElementById("result").innerHTML = translate;



