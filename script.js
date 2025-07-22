let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");

let today = new Date();
currDate.innerText = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click", () => {
  let birthDate = new Date(dateOfBirth.value);

  // Check if date is invalid
  if (isNaN(birthDate)) {
    Age.innerText = "❌ Please enter a valid date (MM/DD/YYYY)";
    displayAge.classList.add("show"); // to make it visible
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  Age.innerText = `🎉 You are ${age} years old.`;
  displayAge.classList.add("show"); // make it visible using CSS class
});
