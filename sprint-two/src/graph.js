

// Instantiate a new graph
var Graph = function() {
 this.nodes = [];
 this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var targetIndex = this.nodes.indexOf(node);
  if (targetIndex !== -1) {
    var removedNode = this.nodes.splice(targetIndex, 1)[0];
    for(var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].includes(removedNode)) {
        this.removeEdge(this.edges[i][0], this.edges[i][1]);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    var currentElement = this.edges[i];
    if (currentElement.includes(fromNode) && currentElement.includes(toNode)) {
      return true;
    }
  }
  
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges.push([fromNode,toNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    var currentElement = this.edges[i];
    if (currentElement.includes(fromNode) && currentElement.includes(toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(element) {
    cb(element);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
/*
addNode: O(1)
contains: O(n)
removeNode:
  best case: O(n)
  worst case: O(n^2)
hasEdge: O(n)
addEdge: O(n)
removeEdge: O(n)
forEachNode: assuming callback is constant, O(n)
*/


