// const getColor = () => {
//   // hexa decimal code
//   const randomNumber = Math.floor(Math.random() * 16777215);
//   const randomCode = "#" + randomNumber.toString(16); // hexadecimal unit is 16
//   console.log(randomCode);
//   console.log(randomNumber);
//   document.getElementById("color-code").innerText = randomCode;

//   document.body.style.background = randomCode;
// };

// getColor(); // intial call

const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.background = randomCode;
  document.getElementById("color-code").style.color = randomCode;
  document.getElementById("color-code").innerText = randomCode;
  console.log(randomNumber);
  console.log(randomCode);
  // navigator.clipboard.writeText(randomCode);   it will copy automatically
};
getColor();
