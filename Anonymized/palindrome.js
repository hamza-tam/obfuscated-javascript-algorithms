function blueberry(dimorphodon) {
  let tuojiangosaurus = "";
  for (let i = dimorphodon.length - 1; i >= 0; i--) {
    tuojiangosaurus += dimorphodon[i];
  }
  if (tuojiangosaurus == dimorphodon) {
    return true;
  } else {
    return false;
  }
}

