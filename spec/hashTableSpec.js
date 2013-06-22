describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("checks and makes sure retrieve, retrieves values", function() {
    hashTable.insert('harry potter','jk rolling');
    hashTable.insert('the lord of the rings','jr tolken');
    hashTable.insert('cather in the rye','jd salisbury');
    expect(hashTable.retrieve('harry potter')).toEqual('jk rolling');
  });

  it("checks and makes sure insert can't insert the same key more than once", function() {
    hashTable.insert('harry potter','jk rolling');
    hashTable.insert('the lord of the rings','jr tolken');
    hashTable.insert('cather in the rye','jd salisbury');
    hashTable.insert('the lord of the rings','sadfs');
    expect(hashTable.retrieve('the lord of the rings')).toEqual('sadfs');
  });

  it("should remove values", function() {
    hashTable.insert('harry potter','jk rolling');
    hashTable.insert('harry potter','jk rolling');
    hashTable.insert('the lord of the rings','jr tolken');
    hashTable.remove('harry potter');
    expect(hashTable.retrieve('harry potter')).toEqual(undefined);
  });
  it("checks retrieve if storage is empty", function() {
    expect(hashTable.retrieve('harry potter')).toEqual(undefined);
  });

  it("should be resistant to collisions and be able to add entries when size limit is reached", function () {
    for (var i = 0; i < 50; i++) {hashTable.insert(('key'+i), 'value'+i);}
    for (i = 0; i < 50; i++) {expect(hashTable.retrieve('key'+i)).toEqual('value'+i);}
  });

});