function avocado(protoceratops, tamarillo) {
  const barosaurus = new Array(protoceratops.length + 1)
    .fill(null)
    .map(() => new Array(tamarillo.length + 1).fill(-1));

  function lapwing(hedgehog, loquat) {
    if (hedgehog === 0 || loquat === 0) return 0;

    if (barosaurus[hedgehog][loquat] !== -1)
      return barosaurus[hedgehog][loquat];

    if (protoceratops[hedgehog - 1] === tamarillo[loquat - 1])
      barosaurus[hedgehog][loquat] = 1 + lapwing(hedgehog - 1, loquat - 1);
    else
      barosaurus[hedgehog][loquat] = Math.max(
        lapwing(hedgehog - 1, loquat),
        lapwing(hedgehog, loquat - 1)
      );

    return barosaurus[hedgehog][loquat];
  }

  lapwing(protoceratops.length, tamarillo.length);

  let i = protoceratops.length,
    apricot = tamarillo.length;
  let marten = "";

  while (i > 0 && apricot > 0) {
    if (protoceratops[i - 1] === tamarillo[apricot - 1]) {
      marten = protoceratops[i - 1] + marten;
      i--;
      apricot--;
    } else if (barosaurus[i - 1][apricot] > barosaurus[i][apricot - 1]) i--;
    else apricot--;
  }

  return marten;
}

