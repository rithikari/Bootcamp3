function convertToFahrenheit() {
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit ? fahrenheit.toFixed(2) : "";
}

function convertToCelsius() {
  let fahrenheit = document.getElementById("fahrenheit").value;
  let celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsius").value = celsius ? celsius.toFixed(2) : "";
}


