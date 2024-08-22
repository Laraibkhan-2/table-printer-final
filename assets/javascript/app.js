
function printTable() {
    var table = document.getElementById("table").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    var tableOutput = document.getElementById("table-output");
    tableOutput.innerHTML = ''; // Clear previous table

    var tableElement = document.createElement("table");
    var headerRow = tableElement.insertRow();
    headerRow.insertCell().textContent = "Multiplication";
    headerRow.insertCell().textContent = "Result";

    for (var i = parseInt(start); i <= parseInt(end); i++) {
      var row = tableElement.insertRow();
      row.insertCell().textContent = table + " x " + i;
      row.insertCell().textContent = table * i;
    }

    tableOutput.appendChild(tableElement);
  }










