//alert('hello world');
document.getElementById("main").innerHTML = "Hello world";

let min = 1;
let max = 10;
let random = Math.floor(Math.random() * (max - min + 1)) + min;

let output="";

for (let i = min; i <= random; i++) {
  switch (i) {
    case 1:
      output += "fun<br />";
      break;
    case 2:
      output += "true<br />";
      break;
    case 3:
      output += "free<br />";
      break;
    case 4:
      output += "adore<br />";
      break;
    case 5:
      output += "alive<br />";
      break;
    case 6:
      output += "styx<br />";
      break;
    case 7:
      output += "heaven<br />";
      break;
    case 8:
      output += "great<br />";
      break;
    case 9:
      output += "line<br />";
      break;
    case 10:
      output += "pen<br />";
      break;
    default:
      throw "We should never get past 10";
  }
}
document.getElementById("main").innerHTML = output;
