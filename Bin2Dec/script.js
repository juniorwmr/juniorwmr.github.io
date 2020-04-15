function Print(value) {
  msg = document.getElementById("result");
  return (msg.innerHTML = value);
}

function Dec2Bin(binary) {
  let decimal = parseInt(binary, 2);
  try {
    if (
      (decimal === 1 && binary != 1) ||
      (decimal === -1 && binary != -1) ||
      isNaN(decimal)
    ) {
      return false;
    }
    return decimal;
  } catch (e) {
    return false;
  }
}

// Getting FORM by ID
let myForm = document.getElementById("form");
// Listing to the submit from id='form'
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  binary = document.getElementById("bin").value;
  decimal = Dec2Bin(binary);

  // Verify binaries digits max length
  if (decimal > 510) {
    return Print("Digite menos do que 8 dígitos.");
  }
  // Convert decimal to binary
  if ((value = Dec2Bin(binary))) {
    return Print(`O valor em decimal é: <strong>${value}</strong>.`);
  } else {
    return Print("O valor não é binário.");
  }
});
