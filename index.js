function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
 
  if (string === shout(string)) {
   return ('YES INDEED!');
  }
  
  if (string === whisper(string)) {
   return ('I can\'t hear you!');
  }
  
  return ("I love you, too.");

}

function logShout(string) {
  if (string.toUpperCase() === string)
  console.log (string)
}

function logWhisper(string) {
  if (string.toLowerCase() === string)
  console.log (string)
}



