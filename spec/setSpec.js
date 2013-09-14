describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("takes any string and returns a boolean reflecting whether it can be found in the set", function() {
    set.add('josh');
    set.add('bill');
    set.add('jose');
    expect(set.contains('josh')).toEqual(true);
    expect(set.contains('hi')).toEqual(false);
  });


  it("takes any string and removes it from the set, if present", function() {
    set.add('josh');
    set.add('bill');
    set.add('bill');
    set.add('jose');
    set.add(9);
    expect(set.contains(9)).toEqual(false);
    set.remove('bill');
    expect(set.contains('bill')).toEqual(false);
  });

});