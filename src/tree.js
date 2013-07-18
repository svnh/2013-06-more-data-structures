var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children =[];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(value){
  return this.value === value || _.any(_.invoke(this.children, 'contains', value));
};