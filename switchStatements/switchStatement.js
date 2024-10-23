const age = Number(prompt("How old are you"));
const text = document.getElementById("age");
text.innerHTML = age;
switch (age) {
  case 10:
    text.innerHTML = age;
    break;

  case 20:
    text.innerHTML = age;
    break;

  case 30:
    text.innerHTML = age;
    break;

  case 40:
    text.innerHTML = "Yellow is my favorite color";
    break;

  default:
    text.innerHTML = "I dont know that color";
    break;
}

// switch statements use the triple euqal sign to compare values so if you are comparing strings of numbers you have to convert the whole thing to numbers
