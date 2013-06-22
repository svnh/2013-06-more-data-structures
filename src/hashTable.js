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
    for(var i = 0; i < this._storage.get(index).length; i++){
      if (this._storage.get(index)[i][0]=== key){
        return ;
      }
    }
    this._storage.get(index).push([key, value]);
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index) === undefined){
    return;
  }
  for(var i = 0; i < this._storage.get(index).length; i++){
    if (this._storage.get(index)[i][0]=== key){
      return this._storage.get(index)[i][1];
    }
  }

  return this._storage.get(index);
};

HashTable.prototype.remove = function(key){
  if (this.retrieve(key)) {
    var index = getIndexBelowMaxForKey(key, this._limit);
    this._storage.set(index, undefined);
  }
};
