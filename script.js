function changeColor(){
  var newColor = makeColor(); 
  var box = document.getElementById('box').style.backgroundColor = newColor; // gets the new color
  document.getElementById('rgb').innerHTML = newColor; // displays the new color 
}

function makeColor(){
  var arr = []; // empty array to store new variables
  for(var i = 0; i < 3; i++) { // create 3 random numbers for the rgb
    var num = Math.floor(Math.random() * 256) // get a random number between 0 and 256
    arr.push(num); // push any new number into the array 
  }
  var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')'; // creates a string to convert to rgb
  return newRgb; // return the new variable back to newColor()
}

// https://www.youtube.com/watch?v=GMxR6ZJDiMo