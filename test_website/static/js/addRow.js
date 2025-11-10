let rowCounter = 0;

function addRow(templateId)
{
  rowCounter++;
  var template = document.getElementById(templateId).content;
  var newRow = template.cloneNode(true);

  Array.from(newRow.firstElementChild.children).forEach((child) => {
    
    child.firstElementChild.id = child.firstElementChild.id.replace("__prefix__", rowCounter)
    child.firstElementChild.name = child.firstElementChild.name.replace("__prefix__", rowCounter)
    
    if (child.firstElementChild.type === 'button') {
      child.firstElementChild.id = child.firstElementChild.id + rowCounter;
      child.firstElementChild.name = child.firstElementChild.name + rowCounter;
    }
    if (child.firstElementChild.type === 'date') {
      child.firstElementChild.valueAsDate = new Date();
    }
  });

  document.getElementById('habit-table').appendChild(newRow);
}

