function calculateShipping(weight, distance, num_packages, speed) {
  var number = (2.5e+9 + ((weight * 13207) * (distance * 73902) * num_packages * (speed * speed)));
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {

  $("form#ship").submit(function(event) {
    var weight = $("input#weight").val();
    var num_packages = $("input#num_packages").val();
    var distance = $("input#distance").val();
    var speed = $("select#speed").val();

    var shipping_Object = {
      weight: weight, num_packages: num_packages, distance: distance, speed: speed,
      calculatePrice: function() {
        return calculateShipping(this.weight, this.distance, this.num_packages, this.speed)
      }
    };

    var cost = shipping_Object.calculatePrice();
    debugger;
    $('#output').text(cost);
    $("#result").show();
    event.preventDefault();
  });

});
