describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(6);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("insert < 6 will add a value to left and insert > 6 will add value right", function() {
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(9);
    binarySearchTree.insert(8);
    expect(binarySearchTree.left.length).toEqual(2);
    expect(binarySearchTree.right.length).toEqual(2);
  });

  it("contains should check value and return true if found", function(){
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(9);
    expect(binarySearchTree.contains(1)).toEqual(true);
    expect(binarySearchTree.contains(21)).toEqual(false);
  });

  it('counter should be number of insertions ', function(){
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    var counter = 0;
    binarySearchTree.depthFirstLog(function(){
      counter++;
    });
    expect(counter).toBe(2);
  });

});