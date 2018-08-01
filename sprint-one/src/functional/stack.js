var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if (counter !== 0) {
      counter--;
      returnVal = storage[counter];
      delete storage[counter];
      return returnVal;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  someInstance.items = storage;
  return someInstance;
};
