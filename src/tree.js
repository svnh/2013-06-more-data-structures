var makeTree = function(something){
  var newTree = {};
  newTree.value = something;
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

treeMethods.addChild = function(pv){
  this.children.push(makeTree(pv));
};

treeMethods.contains = function(findnum){
  return this.value === findnum || _.any(_.invoke(this.children, 'contains', findnum));
};