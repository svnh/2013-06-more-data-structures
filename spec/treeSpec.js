describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree(6);
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("addChild will add a node", function() {
   tree.addChild(5);
   expect(tree.children.length).toEqual(1);

   tree.addChild(3);
   tree.children[1].addChild(88);

   expect(tree.children[0].value).toEqual(5);
  });

//contains should:
//takes any input and returns a boolean reflecting whether it can be found as the 
//value of the target node or any descendant node
 //  it("contains should return true if found at root", function(){
 //     expect(tree.contains(6)).toEqual(true);
 //  });

 // it("contains should check children for value and return true if found", function(){
 //    tree.addChild(3);
 //    tree.addChild(48);
 //    tree.addChild(12);
 //    expect(tree.contains(48)).toEqual(true);
 //  });
  it("contains should check children for value and return true if found", function(){
    tree.addChild(3);
    tree.addChild(48);
    tree.addChild(12);
    tree.children[1].addChild(88);
    tree.children[2].addChild(108);
    tree.children[2].addChild(118);


    expect(tree.contains(88)).toEqual(true);
    expect(tree.contains(118)).toEqual(true);

    //expect(tree.contains(6)).toEqual(true);

  });
  // Add more tests here to test the functionality of tree.
});