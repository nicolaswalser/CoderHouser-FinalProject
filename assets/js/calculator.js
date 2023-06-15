function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var result;

  if (operator === "add") {
    result = num1 + num2;
  } else if (operator === "subtract") {
    result = num1 - num2;
  } else if (operator === "multiply") {
    result = num1 * num2;
  } else if (operator === "divide") {
    result = num1 / num2;
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
