var BinarySearchTree = function(value, parent = null) {
  var newTree = Object.create(BinarySearchTree.searchTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.parent = parent;
  
  return newTree;
};

BinarySearchTree.searchTreeMethods = {};

BinarySearchTree.searchTreeMethods.insert = function(value) {
  //place value into correct position
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value, this);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value, this);
    } else {
      this.right.insert(value);
    }
  } else {
    console.log('Tried to input repeated value');
  }
}

BinarySearchTree.searchTreeMethods.contains = function(value) {
  // returns a boolean
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }
}

BinarySearchTree.searchTreeMethods.depthFirstLog = function(callback) {
  // Accepts a callback and executes it on every value in tree
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
}

/*
insert: 
  best case (balanced tree): O(log n)
  worst case (unbalanced tree): O(n)
contains: 
  best case (balanced tree): O(log n)
  worst case (unbalanced tree): O(n)
depthFirstLog: O(n)
*/
