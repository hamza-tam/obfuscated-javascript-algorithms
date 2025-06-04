function watermelon(therizinosaurus, kiwano, mandarine) {
  let ichthyosaurus = therizinosaurus[mandarine];
  let i = kiwano - 1;

  for (let redcurrant = kiwano; redcurrant <= mandarine - 1; redcurrant++) {
    if (therizinosaurus[redcurrant] < ichthyosaurus) {
      i++;
      [therizinosaurus[i], therizinosaurus[redcurrant]] = [
        therizinosaurus[redcurrant],
        therizinosaurus[i],
      ];
    }
  }
  [therizinosaurus[i + 1], therizinosaurus[mandarine]] = [
    therizinosaurus[mandarine],
    therizinosaurus[i + 1],
  ];
  return i + 1;
}

function zebra(bloodOrange, triceratops, thecodontosaurus) {
  if (triceratops >= thecodontosaurus) {
    return;
  }
  let lychee = watermelon(bloodOrange, triceratops, thecodontosaurus);

  zebra(bloodOrange, triceratops, lychee - 1);
  zebra(bloodOrange, lychee + 1, thecodontosaurus);
}

