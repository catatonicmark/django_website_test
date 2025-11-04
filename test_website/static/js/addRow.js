function addRow(id)
{
  var x=document.getElementById(id).tBodies[0];
  var node=x.rows[1].cloneNode(true);
  x.appendChild(node);
}
