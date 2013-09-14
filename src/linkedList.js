// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;
  newLinkedList.currentspot = null;
  newLinkedList.currenthead = null;

  newLinkedList.addToTail = function(value){
    if (newLinkedList.head === null){
      newLinkedList.head = makeNode(value);
      newLinkedList.tail =  newLinkedList.head;
      newLinkedList.currentspot = newLinkedList.tail;
    } else {
      newLinkedList.tail.next = makeNode(value);
      newLinkedList.currentspot = newLinkedList.tail;
      newLinkedList.tail = newLinkedList.tail.next;
      newLinkedList.tail.previous = newLinkedList.currentspot;
    }
  };

  newLinkedList.addToHead = function(value){
    if (newLinkedList.head === null){
      newLinkedList.head = makeNode(value);
      newLinkedList.tail =  newLinkedList.head;
      newLinkedList.currenthead = newLinkedList.head;
    } else {
      newLinkedList.currenthead = newLinkedList.head;
      newLinkedList.head = makeNode(value);
      newLinkedList.currenthead.previous = newLinkedList.head;
      newLinkedList.head.next = newLinkedList.currenthead;
    }
  };

  newLinkedList.removeHead = function(){
    if (newLinkedList.head === null) {
      return undefined;
    }
    var temp = newLinkedList.head.value;
    newLinkedList.head = newLinkedList.head.next;
    return temp;
  };

  newLinkedList.removeTail = function(){
    if (newLinkedList.tail === null) {
      return undefined;
    }
    var temp = newLinkedList.tail.value;
    newLinkedList.tail = newLinkedList.tail.previous;
    return temp;
  };

  newLinkedList.contains = function(value){
    var current = newLinkedList.head;
    while(current.next !== null){
      if (current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.previous = null;
  newNode.value = value;
  newNode.next = null;
  return newNode;
};

