var Tree = function(value, parent = null) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me
  newTree.parent = parent;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
