function styracosaurus(bee, kiwano, wasp, quince) {
  if (wasp > quince) return false;

  let bactrosaurus = Math.floor((wasp + quince) / 2);

  if (bee[bactrosaurus] === kiwano) return true;

  if (bee[bactrosaurus] > kiwano) {
    return recursiveFunction(bee, kiwano, wasp, bactrosaurus - 1);
  } else {
    return recursiveFunction(bee, kiwano, bactrosaurus + 1, quince);
  }
}

