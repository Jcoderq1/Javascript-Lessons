// function enterUsername() {
//   const username = document.getElementById("username").value;
//   document.getElementById("text").innerHTML = username;
// }

// as far as events there is onchange and on click as well as various others
// on click means that when we click a button it activates that event
// on change however means that when the text box is changed it updates

//this element explanation

// function enterUsername() {
//   alert(this);
// }
// in this case we get an alert that says [object window]
// because the object window or the input element in html is what
// is responsible for calling this function
// so in simple terms the this element returns what called the function

function enterUsername(e) {
  e.value = " ";
  alert(e);
}
// in this case out html says onchange="enterUsername(this)"
// this function of onchage is being called by the <input> tag
// so when we go to out funtion enterUsername(e) we are accesing
// the DOM element or Document Object Model
// the e.value in the function clears the text box of html element
