describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  // Additional tests
  it('should be able to handle numbers', function() {
    set.add(1);
    set.add(2);
    set.remove(1);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains(2)).to.equal(true);
  });
  
  it('should be able to handle input objects of any type', function() {
    
    // Function
    var myFunc = function() { console.log('hello world') };
    set.add(myFunc);
    expect(set.contains(myFunc)).to.equal(true);
    set.remove(myFunc);
    expect(set.contains(myFunc)).to.equal(false);
    
    // Boolean
    set.add(true);
    expect(set.contains(true)).to.equal(true);
    set.add(false);
    expect(set.contains(false)).to.equal(true);
    
    // Object
    var myObj = {
      test1: '1',
      test2: '2'
    }
    set.add(myObj);
    expect(set.contains(myObj)).to.equal(true);
    set.remove(myObj);
    expect(set.contains(myObj)).to.equal(false);
    
    // Undefined
    set.add(undefined);
    expect(set.contains(undefined)).to.equal(true);
    set.remove(undefined);
    expect(set.contains(undefined)).to.equal(false);
    
    // Null
    set.add(null);
    expect(set.contains(null)).to.equal(true);
    set.remove(null);
    expect(set.contains(null)).to.equal(false);
    
    // NaN
    set.add(NaN);
    expect(set.contains(NaN)).to.equal(true);
    set.remove(NaN);
    expect(set.contains(NaN)).to.equal(false);
    
  });
});
