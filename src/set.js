var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  this._storage[value]=value;
};

setPrototype.contains = function(item){
  return this._storage[item]=== item;
};

setPrototype.remove = function(passed){
  if (this.contains(passed)) {
    delete this._storage[passed];
  }
};


// set['josh']='josh'
//  'josh'