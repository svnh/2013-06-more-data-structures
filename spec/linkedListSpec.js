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

  it("should return undefined when trying to remove head from empty linkedList", function() {
    expect(linkedList.removeHead()).toEqual(undefined);
  });

  it("should make previous point to the node behind", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(40);
    expect(linkedList.tail.previous.value).toEqual(20);
  });

  it("should add a node to the head of the linked list", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(40);
    linkedList.addToHead(8);
    expect(linkedList.head.value).toEqual(8);
  });

  it("removes the last node from the list and returns its value", function(){
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(40);
    linkedList.removeTail();
    expect(linkedList.tail.value).toEqual(20);
  });


  // add more tests here to test the functionality of linkedList
});