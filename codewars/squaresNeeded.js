function squaresNeeded(grains) {
  let n = 1;
  let squares = 0;
  if (grains === 0) {
    return squares;
  } else {
    do {
      squares++;
      n *= 2;
    } while (n <= grains);
    return squares;
  }
}
squaresNeeded(0);
// for (let i = 0; i < grains; i++) {
//     if (n <= grains) {
//       squares++;
//       n *= 2;
//     }
//   }
