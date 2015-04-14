$(document).ready(function() {

  $("form#triangle_input").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var sortme = [a, b, c];
    sortme.sort();

    var a = sortme[0];
    var b = sortme[1];
    var c = sortme[2];

    var triangle = {a: a, b: b, c: c,
      type: function() {
        if((this.a + this.b) <= this.c){
          $("#output").text("not a valid triangle");
        }
        //checks for equilateral
        else if((this.a === this.b) && (this.b === this.c)) {
          $("#output").text("an Equilateral triangle");
          $("#equilateral-list").append("<li>" + a + ", " + b + ", " + c + "</li>");
        }

        //checks for isosceles
        else if((this.a === this.b) || (this.b === this.c)) {
          $("#output").text("an Isosceles triangle");
          $("#isosceles-list").append("<li>" + a + ", " + b + ", " + c + "</li>");
        }

        //checks for right triangle
        else if( ((this.a*this.a) + (this.b*this.b))  === (this.c*this.c) ) {
          $("#output").text("a Right triangle");
          $("#right-list").append("<li>" + a + ", " + b + ", " + c + "</li>");
        }

        else {
          //all remaining triangles will be scalene
          $("#output").text("a Scalene triangle");
          $("#scalene-list").append("<li>" + a + ", " + b + ", " + c + "</li>");
        }
      }
    };

    triangle.type();

    $("#result").show();
    event.preventDefault();
  });

});
