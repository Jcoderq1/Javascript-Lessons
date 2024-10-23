const num = [1, 2, 3, 4, 5, 6, 5, 4, 3];
const sortedNums = num.sort((a, b) => a - b);
// the sort function typically sorts based on asky cahracter values, what we actually want in this case is for
// it to sort from least to greatest so the sort function accepts an arrow function that in this case will
// accept to arguments, a is the first value b is the second value it is going to compare each value
// if a is less than b, a stays to the left if b is less than a, b switches places with a
// to reverse this just do b - a

// we are going to sort by the years of the cars in this object
const objs = [
  { year: 2012, make: "Ford" },
  { year: 2017, make: "Porsche" },
  { year: 1999, make: "Volvo" },
  { year: 2023, make: "Chevy" },
  { year: 2011, make: "Ford" },
  { year: 2010, make: "Porsche" },
  { year: 1999, make: "Volvo" },
  { year: 2021, make: "Chevy" },
  { year: 2013, make: "Ford" },
  { year: 2019, make: "Porsche" },
  { year: 1996, make: "Volvo" },
  { year: 2020, make: "Chevy" },
];

const sortedObjs = objs.sort((a, b) => {
  const diffInYear = b.year - a.year;
  if (diffInYear === 0) {
    if (a.make > b.make) {
      return 1;
    } else if (a.make < b.make) {
      return -1;
    } else {
      return 0;
    }
  }
  return diffInYear;
});
console.log(sortedObjs.reverse());

// to reverse an array just do .reverse()
// reverse does change the original array so if you dont want to do that make sure to use the spread operator
// ... to copy the array and the reverse it
