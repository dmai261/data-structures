var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter !== 0) {
      counter--;
      var returnVal = storage[0];
      for (var key in storage) {
        storage[key - 1] = storage[key];
        delete storage[key];
      }
      return returnVal;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  someInstance.items = storage;
  return someInstance;
};
