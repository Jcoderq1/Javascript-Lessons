const age = prompt("Enter yout age: ");
if (age >= 12 && age <= 20) {
  alert("you can ride the rollercoaster ");
} else if (age >= 40) {
  alert(
    "you can only ride the rollercoaster if you are with someone between 12 and 20"
  );
} else {
  alert("you can NOT ride the rollercoaster");
}
