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
    expect(hashTable.retrieve('the lord of the rings')).toEqual('jr tolken');
  });

  it("checks and makes sure insert can't insert the same key more than once", function() {
    hashTable.insert('harry potter','jk rolling');
    hashTable.insert('the lord of the rings','jr tolken');
    hashTable.insert('cather in the rye','jd salisbury');
    hashTable.insert('the lord of the rings','sadfs');
    expect(hashTable.retrieve('the lord of the rings')).toEqual('jr tolken');
  });

  it("should remove values", function() {
    hashTable.insert('harry potter','jk rolling');
    hashTable.insert('harry potter','jk rolling');
    hashTable.insert('the lord of the rings','jr tolken');
    hashTable.remove('harry potter');
    expect(hashTable.retrieve('harry potter')).toEqual(undefined);
  });
});