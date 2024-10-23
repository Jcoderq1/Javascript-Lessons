function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
  } else {
    console.log(Math.abs(cap - (on + wait)));
  }
}
enough(68, 63, 77);
