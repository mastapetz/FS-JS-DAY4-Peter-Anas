var firstName = document.querySelector("#inputFirstname");
var lastName = document.querySelector("#inputLastname");
var age = document.querySelector("#inputAge");
// const outputBox = document.querySelector("#output");

console.log(firstName.value);
console.log(lastName.value);
console.log(age.value);

const lengthInputCheck = (e) => {
  console.log(e.target.value);
  if (e.target.value < 5) {
    e.target.style.color = "red";
  } else {
    e.target.style.color = "green";
  }
};

// checks firstnames length when entered
document
  .querySelector("#inputFirstname")
  .addEventListener("click", lengthInputCheck);

// checks lastnames length when entered
document
  .querySelector("#inputLastname")
  .addEventListener("click", lengthInputCheck);

// prints the content of the variable into the div #output
// += needed for all values to be  displayed or they would be overwritten otherwise
// the <br> give the linebreak in the DOM
document.querySelector(
  "#output"
).innerHTML = `Firstname: ${firstName.value}<br>`;
document.querySelector(
  "#output"
).innerHTML += `Lastname: ${lastName.value}<br>`;
document.querySelector("#output").innerHTML += `Age: ${age.value}`;
