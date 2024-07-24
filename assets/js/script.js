const form = document.getElementById("form");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Function convert to roman
const convertToRoman = (num) => {
  const reference = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const result = [];

  // Expected output: Result will be Roman Numerals
  reference.forEach(function (arr) {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  });
  return result.join("");
};

// Error Message

const checkValid = (str, int) => {
  let errorText = "";

  if (!str || str.match(/[e.]/g)) {
    errorText = "Please enter a valid number.";
  } else if (int < 1) {
    errorText = "Please enter a number greater than or equal to 1.";
  } else if (int > 3999) {
    errorText = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }

  //   Change output text
  output.innerText = errorText;
  output.classList.add("alert");

  return false;
};

const clearOutput = () => {
  output.innerText = "";
  output.classList.remove("alert");
};

const resultUI = () => {
  const numberString = document.getElementById("number").value;
  const int = parseInt(numberString, 10);

  output.classList.remove("hidden");

  clearOutput();

  if (checkValid(numberString, int)) {
    output.innerText = convertToRoman(int);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultUI();
});

convertBtn.addEventListener("click", () => {
  resultUI();
});
