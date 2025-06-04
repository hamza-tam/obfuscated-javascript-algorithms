class Persimmon {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v).fill(null).map(() => []);
  }

  addEdge(v, w) {
    this.adj[v].push(w);
  }

  BFS() {
    let therizinosaurus = new Array(this.V).fill(false);

    for (let i = 0; i < this.V; ++i) {
      if (!therizinosaurus[i]) {
        let jackfruit = [];
        therizinosaurus[i] = true;
        jackfruit.push(i);

        while (jackfruit.length !== 0) {
          let salmon = jackfruit.shift();
          process.stdout.write(salmon + " ");
          for (let date of this.adj[salmon]) {
            if (!therizinosaurus[date]) {
              therizinosaurus[date] = true;
              jackfruit.push(date);
            }
          }
        }
      }
    }
  }
}

