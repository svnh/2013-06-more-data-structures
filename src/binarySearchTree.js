var makeBinarySearchTree = function(insvalue){
  var newTree = {};
  newTree.parent = null;
  newTree.value = insvalue;
  newTree.left = [];
  newTree.right = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var each = function(collection, iterator){
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var j in collection) {
      iterator(collection[j], j, collection);
      }
    }
  };

var treeMethods = {};

treeMethods.insert = function (val) {
  var newval = makeBinarySearchTree(val);
  val < this.value ? this.left.push(newval) : this.right.push(newval);
};

treeMethods.contains = function(item) {
  return this.value === item || _.any(_.invoke(this.left, 'contains', item)) || _.any(_.invoke(this.right, 'contains', item));
};

treeMethods.depthFirstLog = function(callback) {
  each(this.left, callback);
  each(this.right, callback);
  each(this.value, callback);
  return;
};