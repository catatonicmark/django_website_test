let rowCounter = 0;

function addRow(id)
{
  var table = document.getElementById(id).tBodies[0];
  var newRow = table.rows[1].cloneNode(true);
  for (let i = 0; i < newRow.cells.length; i++) {
    const cell = newRow.cells[i];
    const input = cell.firstElementChild;
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
