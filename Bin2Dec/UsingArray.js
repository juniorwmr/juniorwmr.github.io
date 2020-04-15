// User can enter up to 8 binary digits in one input field
// User must be notified if anything other than a 0 or 1 was
//  entered
// User views the results in a single output field
//  containing the decimal (base 10) equivalent of the binary number
//  that was entered

function Print(value) {
  msg = document.getElementById("result");
  return (msg.innerHTML = value);
}

function VerifyLength(array) {
  if (array.length > 8) {
    return true;
  } else {
    return false;
  }
}

function Bin2Dec(binary_array) {
  decimal = 0;
  for (let i = 0; i < binary_array.length; i++) {
    if (binary_array[i] === "1" || binary_array[i] === "0") {
      if (binary_array[i] === "1") {
        decimal += 2 ** i;
      }
    } else {
      return false;
    }
  }
  return decimal;
}

let myForm = document.getElementById("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  binary = String(document.getElementById("bin").value);
  binary_array = binary.split("").reverse();
  if (VerifyLength(binary_array)) {
    return Print("O limite máximo para dígitos é 8.");
  } else {
    if ((value = Bin2Dec(binary_array))) {
      return Print(`O valor em decimal é: ${value}.`);
    } else {
      return Print("Digite um valor binário!");
    }
  }
});
