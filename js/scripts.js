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

  $("form#triangle_input").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var outcome = triangler([a, b, c]);

    if(outcome === "Equilateral") {
      $("#output").text("an Equilateral triangle");
    }
    if(outcome === "Isosceles") {
      $("#output").text("an Isosceles triangle");
    }
    if(outcome === "Scalene") {
      $("#output").text("a Scalene triangle");
    }
    if(outcome === "Invalid Input") {
      $("#output").text("not a valid triangle");
    }

    $("#result").show();
    event.preventDefault();
  });

});
