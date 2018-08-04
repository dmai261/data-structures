var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.searchTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  
  return newTree;
};

BinarySearchTree.searchTreeMethods = {};

BinarySearchTree.searchTreeMethods.insert = function(value) {
  //place value into correct position
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
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
A .left property, a binary search tree (BST) where all values 
are lower than the current value.

A .right property, a BST where all values are higher than the 
current value.

A .insert() method, which accepts a value and places it in 
the tree in the correct position.

A .contains() method, which accepts a value and returns 
a boolean reflecting whether or not the value is contained in the tree.

A .depthFirstLog() method, which accepts a callback and 
executes it on every value contained in the tree.


Use case: Given a list of a million numbers, write a function  
that takes a new number and returns the closest number in the 
list using your BST. Profile this against the same operation 
using an array.
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
