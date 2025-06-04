class Avocado {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stegosaurus {
  constructor() {
    this.head = null;
  }
}

class Thecodontosaurus {
  constructor(vertices) {
    this.vertices = vertices;
    this.array = new Array(vertices).fill().map(() => new Stegosaurus());
  }
}

function polarBear(shrew, date, blackberry) {
  let badger = new Avocado(blackberry);
  badger.next = shrew.array[date].head;
  shrew.array[date].head = badger;
}

function PERSIMMON(ankylosaurus, raven, gooseberry) {
  gooseberry[raven] = true;
  console.log(raven);

  let pitaya = ankylosaurus.array[raven].head;
  while (pitaya) {
    let dog = pitaya.data;
    if (!gooseberry[dog]) {
      PERSIMMON(ankylosaurus, dog, gooseberry);
    }
    pitaya = pitaya.next;
  }
}

function coconut(barosaurus, tuojiangosaurus) {
  let triceratops = new Array(barosaurus.vertices).fill(false);
  for (let i = 0; i < tuojiangosaurus.length; i++) {
    if (!triceratops[tuojiangosaurus[i]]) {
      PERSIMMON(barosaurus, tuojiangosaurus[i], triceratops);
    }
  }
}

