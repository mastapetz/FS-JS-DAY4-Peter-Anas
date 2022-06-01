// var firstName = document.querySelector("#inputFirstname");
// var lastName = document.querySelector("#inputLastname");
// var age = document.querySelector("#inputAge");
// test variables
// var fName = toString(firstName);
// var lName = toString(lastName);
// const outputBox = document.querySelector("#output");

// console.log(firstName.value);
// console.log("firstName " + firstName.length + " länge");
// console.log(lastName.value);
// console.log("firstName " + lName.length + " länge");
// console.log(age.value);

const lengthInputCheck = (e) => {
  // e.preventDefault()
  var firstName = document.querySelector("#inputFirstname");
  var lastName = document.querySelector("#inputLastname");
  var age = document.querySelector("#inputAge");
  //
  if (firstName.value.length < 5) {
    firstName.style.color = "red";
    // prints the content of the variable into the div #output
    // += needed for all values to be  displayed or they would be overwritten otherwise
    // the <br> give the linebreak in the DOM
    document.querySelector(
      "#output"
    ).innerHTML += `<span class="red">Firstname: ${firstName.value}</span><br>`;
  } else {
    firstName.style.color = "green";
    document.querySelector(
      "#output"
    ).innerHTML += `<span class="green">Firstname: ${firstName.value}</span><br>`;
  }
  //
  if (lastName.value.length < 5) {
    lastName.style.color = "red";
    document.querySelector(
      "#output"
    ).innerHTML += `<span class="red">Lastname: ${lastName.value}</span><br>`;
  } else {
    lastName.style.color = "green";
    document.querySelector(
      "#output"
    ).innerHTML += `<span class="green">Lastname: ${lastName.value}</span><br>`;
  }

  document.querySelector("#output").innerHTML += `Age: ${age.value}<br>`;
};

// checks length when entered
document
  .querySelector("#checkLength")
  .addEventListener("click", lengthInputCheck);

// checks lastnames length when entered
// document
//   .querySelector("#inputLastname")
//   .addEventListener("focusout", lengthInputCheck);
