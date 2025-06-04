class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }
}

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.array = new Array(vertices).fill().map(
      () => new List());
  }
}

function addEdge(graph, src, dest) {
  let newNode = new Node(dest);
  newNode.next = graph.array[src].head;
  graph.array[src].head = newNode;
}

function DFS(graph, vertex, visited) {
  visited[vertex] = true;
  console.log(vertex);

  let currentNode = graph.array[vertex].head;
  while (currentNode) {
    let adjacentVertex = currentNode.data;
    if (!visited[adjacentVertex]) {
      DFS(graph, adjacentVertex, visited);
    }
    currentNode = currentNode.next;
  }
}

function DFSTraversal(graph, order) {
  let visited = new Array(graph.vertices).fill(false);
  for (let i = 0; i < order.length; i++) {
    if (!visited[order[i]]) {
      DFS(graph, order[i], visited);
    }
  }
}

