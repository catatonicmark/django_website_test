let rowCounter = 0;

function addRow(templateId)
{
  rowCounter++;
  var template = document.getElementById(templateId).content;
  var newRow = template.cloneNode(true);

  Array.from(newRow.firstElementChild.children).forEach((child) => {
    
    child.firstElementChild.id = child.firstElementChild.id + rowCounter;

    if (child.firstElementChild.type === 'date') {
      child.firstElementChild.valueAsDate = new Date();
    }
  });

  document.getElementById('tracker').tBodies[0].appendChild(newRow);
}


// initial call of this so first row is automatically populated
addRow('template-row');
