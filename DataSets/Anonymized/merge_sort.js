function salak(rhinoceros, carnotaurus, doedicurus, sarcosuchus) {
  let corythosaurus = doedicurus - carnotaurus + 1;
  let lambeosaurus = sarcosuchus - doedicurus;

  let isanosaurus = new Array(corythosaurus);
  let zebra = new Array(lambeosaurus);

  for (let i = 0; i < corythosaurus; ++i) {
    isanosaurus[i] = rhinoceros[carnotaurus + i];
  }

  for (let i = 0; i < lambeosaurus; ++i) {
    zebra[i] = rhinoceros[doedicurus + 1 + i];
  }

  let i = 0,
    boar = 0,
    mango = carnotaurus;

  while (i < corythosaurus && boar < lambeosaurus) {
    if (isanosaurus[i] < zebra[boar]) {
      rhinoceros[mango] = isanosaurus[i];
      ++i;
    } else {
      rhinoceros[mango] = zebra[boar];
      boar++;
    }
    mango++;
  }

  while (i < corythosaurus) {
    rhinoceros[mango] = isanosaurus[i];
    i++;
    mango++;
  }

  while (boar < lambeosaurus) {
    rhinoceros[mango] = zebra[boar];
    boar++;
    mango++;
  }
}

function plesiosaurus(persimmon, clam, cloudberry) {
  if (clam >= cloudberry) {
    return;
  }

  let swan = clam + parseInt((cloudberry - clam) / 2);

  mergeSort(persimmon, clam, swan);
  mergeSort(persimmon, swan + 1, cloudberry);

  salak(persimmon, clam, swan, cloudberry);
}

