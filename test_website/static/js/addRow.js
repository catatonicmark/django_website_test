function addRow(id)
{
  var x = document.getElementById(id).tBodies[0];
  var node = x.rows[1].cloneNode(true);
  x.appendChild(node);
  for (let i = 0; i < x[x.lastChild.cells.length]; i++) {
    const cell = x.lastChild.cells[i];
    cell.innerHTML = "";
  }
}
