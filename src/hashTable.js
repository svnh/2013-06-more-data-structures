var HashTable = function(){
  this._limit = 1;
  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key, this._limit);
    if (this._storage.get(index) === undefined){
      this._storage.set(index, [[key, value]]);
  } else {
    if (this.retrieve(key) === value) {
      return;
    }
    this._storage.get(index).push([key, value]);
  }
};

HashTable.prototype.retrieve = function(key){
  var index = this._storage.get(getIndexBelowMaxForKey(key, this._limit));
  var valueFound;
  _.each(index, function(value, index, list){
    if(value[0] === key){
      valueFound=value[1];
    }
  });
  return valueFound;
};

HashTable.prototype.remove = function(key){
  this.insert(key, undefined);
};
