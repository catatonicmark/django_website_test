let rowCounter = 0;

function addRow(id)
{
  rowCounter++;
  var table = document.getElementById(id).tBodies[0];
  var newRow = table.rows[1].cloneNode(true);
  newRow.id = `row_${rowCounter}`;
  for (let i = 0; i < newRow.cells.length; i++) {
    const cell = newRow.cells[i];
    const input = cell.firstElementChild;
    input.id = `${input.id}${rowCounter}`;
    input.value = "";
    if (input.type === "checkbox") {
      input.checked = false;
    }
    if (input.type === "date") {
      input.valueAsDate = new Date(); 
    }
  }
  table.appendChild(newRow);
  
}
