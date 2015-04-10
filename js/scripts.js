var triangler = function(input) {

  input.sort(); //sorts input for lowest to highest

  //define a b and c as side lengths from inputs
  var a = input[0];
  var b = input[1];
  var c = input[2];

  if((a + b) <= c){ //checks if a triangle cannot be formed
    return "Invalid Input";
  }

  if((a === b) && (b === c)) {
    return "Equilateral";
  }

  if((a === b) || (b === c)) {
    return "Isosceles";
  }

  if( ((a*a) + (b*b))  === (c*c) ) {
    return "Right";
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
