var triangler = function(input) {
  input.sort();
  if((input[0] + input[1]) <= input[2]){
    console.log("a: " + input[0]);
    console.log("b: " + input[1]);
    console.log("c: " + input[2]);
    return "Invalid Input";
  }
  return "Equilateral";
};





$(document).ready(function() {

});
