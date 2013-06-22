var makeTree = function(something){
  var newTree = {};
  newTree.parent = null;
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

this.parent = this.value;

treeMethods.addChild = function(pv){
  var child = makeTree(pv);
  this.children.push(child);
  child.parent = this;
};

treeMethods.removeParent = function(){
  delete this.parent.children[0];
  delete this.parent;
};

treeMethods.contains = function(findnum){
  return this.value === findnum || _.any(_.invoke(this.children, 'contains', findnum));
};