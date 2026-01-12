
// 1) shout(string)
// receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase();
}

// 2) whisper(string)
// receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// 3) logShout(string)
// logs the string in all caps (no return)
function logShout(string) {
  console.log(string.toUpperCase());
}

// 4) logWhisper(string)
// logs the string in all lowercase (no return)
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// 5) sayHiToHeadphonedRoommate(string)
// returns different responses depending on the input
function sayHiToHeadphonedRoommate(string) {
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
}

// 6) isEven(num)
// returns true if the number is even, false otherwise
function isEven(num) {
  return num % 2 === 0;
}

// 7) getFirstElement(arr)
// returns the first element of an array
function getFirstElement(arr) {
  return arr[0];
}