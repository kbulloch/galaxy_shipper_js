describe('triangler', function() {

  it('will return "Invalid Input" for input values that cannot form a triangle', function() {
    expect(triangler([1, 1, 3])).to.equal("Invalid Input");
  });

  it('will return "Invalid Input" for input values, in any order, that cannot form a triangle', function() {
    expect(triangler([2, 1, 1])).to.equal("Invalid Input");
  });

  it('will return "Invalid Input" for any single input value of zero', function() {
    expect(triangler([1, 1, 0])).to.equal("Invalid Input");
  });

  it('will return "Equilateral" for an input of all equal values', function() {
    expect(triangler([1, 1, 1])).to.equal("Equilateral");
  });

  it('will return "Isosceles" for an input of all equal values', function() {
    expect(triangler([2, 1, 2])).to.equal("Isosceles");
  });

  it('will return "Scalene" for input values that are disequal but form a triangle', function() {
    expect(triangler([4, 3, 2])).to.equal("Scalene");
  });

  it('will return "Right" for input values that form a right triangle', function() {
    expect(triangler([3, 4, 5])).to.equal("Right");
  });

});
