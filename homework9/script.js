function createTable() {
  const numRows = parseInt(document.getElementById("numRows").value);
  const numColumns = parseInt(document.getElementById("numColumns").value);
  const tableContainer = document.getElementById("tableContainer");

  tableContainer.innerHTML = "";

  const table = document.createElement("table");
  table.style.border = "1px solid black";

  for (let i = 1; i <= numRows; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= numColumns; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid black";
      cell.style.padding = "10px";

      cell.innerText = `Rows-${i} Columns-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}
