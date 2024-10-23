function whatCentury(year) {
  if (year.endsWith("00")) {
    console.log(`${year.slice(0, 2)}th`);
  } else {
    let cen = year.slice(0, 2);
    let diffCen = (parseInt(cen) + 1).toString();
    if (diffCen > 20 && diffCen[diffCen.length - 1] == 1) {
      console.log(`${diffCen}st`); // hello my name is tim and i will be teach hellow hgow are you doing my name is tim and i want hwllo how are yuou doing today my name is time and this is a but unchello whow
    } else if (diffCen < 20 && diffCen[diffCen.length - 1] == 1) {
      console.log(`${diffCen}th`);
    } else if (diffCen > 20 && diffCen[diffCen.length - 1] == 2) {
      console.log(`${diffCen}nd`);
    } else if (diffCen < 20 && diffCen[diffCen.length - 1] == 2) {
      console.log(`${diffCen}th`);
    } else if (diffCen > 20 && diffCen[diffCen.length - 1] == 3) {
      console.log(`${diffCen}rd`);
    } else if (diffCen < 20 && diffCen[diffCen.length - 1] == 3) {
      console.log(`${diffCen}th`);
    } else if (diffCen[diffCen.length - 1] == 0) {
      console.log(`${diffCen}th`);
    } else if (
      diffCen[diffCen.length - 1] >= 4 &&
      diffCen[diffCen.length - 1] <= 9
    ) { 
      console.log(`${diffCen}th`);
    }
  }
}

whatCentury("2154");

let a = "hello";
let b = "hi";
let c = b;
console.