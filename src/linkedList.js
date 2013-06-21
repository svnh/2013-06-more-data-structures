// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    if (newLinkedList.head === null){
      newLinkedList.head = makeNode(value);
      newLinkedList.tail =  newLinkedList.head;
    } else {
      newLinkedList.tail.next = makeNode(value);
      newLinkedList.tail = newLinkedList.tail.next;
    }
  };

  newLinkedList.removeHead = function(){
    var temp = newLinkedList.head.value;
    newLinkedList.head = newLinkedList.head.next;
    return temp;
  };

  newLinkedList.contains = function(value){
    var current=newLinkedList.head;
    while(current.next !== null){
      if (current.value==value){
        return true;
      }
      current=current.next;
    }
    return false;

    // console.log(newLinkedList.head.value);
    // console.log(newLinkedList.head.next);
    // console.log(newLinkedList.head.next.next);
    // console.log(newLinkedList.tail);
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;


  newNode.removeNextNode = function(){
  };

  return newNode;
};

