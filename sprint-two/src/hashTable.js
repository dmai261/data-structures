

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
  //this.record = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var arrayToInsert = this._storage.get(index);
  
  var foundKey = false;
  for (var i = 0; i < arrayToInsert.length; i++) {
    if (arrayToInsert[i][0] === k) {
      arrayToInsert[i][1] = v;
      foundKey = true;
    }
  }
  
  if (!foundKey) {
    arrayToInsert.push([k, v]);
  }
  
  if (this.counter >= (this._limit * 0.75)) {
    var prevStorage = this._storage;
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    this.counter = 0;
    var hashObj = this;
    console.log(hashObj);
    prevStorage.each(function(item) {
      if (item !== undefined) {
        item.forEach(function(element) {
          hashObj.insert(element[0], element[1]);
        }); // [['steven', 'tyler'], ['mr', 'doob']];
      }
    });
    // for (var i = 0; i < this._limit / 2; i++) {
    //   var itemsToInsert = prevStorage.get(i);
    //   if (itemsToInsert !== undefined) {
    //     itemsToInsert.each;
    //   }
    // }
    // put items from prevStorage into larger storage
    
  }
  
  this._storage.set(index, arrayToInsert);
  this.counter++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var targetArrayAtIndex = this._storage.get(index);
  if (targetArrayAtIndex === undefined) {
    return undefined;
  }
  
  for (var i = 0; i < targetArrayAtIndex.length; i++) {
    if (targetArrayAtIndex[i][0] === k) {
      return targetArrayAtIndex[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var targetArrayAtIndex = this._storage.get(index);
  if (targetArrayAtIndex === undefined) {
    return undefined;
  }
  
  for (var i = 0; i < targetArrayAtIndex.length; i++) {
    if (targetArrayAtIndex[i][0] === k) {
      targetArrayAtIndex.splice(i, 1);
    }
  }
  
  this._storage.set(index, targetArrayAtIndex);
  this.counter--;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


