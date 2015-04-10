var triangler = function(input) {

  input.sort(); //sorts input for lowest to highest

  if((input[0] + input[1]) <= input[2]){ //checks if a triangle cannot be formed
    return "Invalid Input";
  }

  if((input[0] === input[1]) && (input[1] === input[2])) {
    return "Equilateral";
  }

  if((input[0] === input[1]) || (input[1] === input[2])) {
    return "Isosceles";
  }

  return "Scalene";

};





$(document).ready(function() {

});
