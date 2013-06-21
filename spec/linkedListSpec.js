describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should test if the linkedlist contains a value", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(14);
    linkedList.addToTail(20);
    expect(linkedList.contains(10)).toEqual(true);
  });
   it("should remove the head and return its value and assign head to head.next", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    expect(linkedList.removeHead()).toEqual(5);
    expect(linkedList.head.value).toEqual(10);
  });
  // add more tests here to test the functionality of linkedList
});