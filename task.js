function createTask(text, checked, onChecked, onRemove){
  var task = document.createElement('div');
  task.setAttribute('class', 'content__tarea');
  
  task.innerHTML = `    
    <input class="content__cb" type="checkbox" ${checked ? 'checked' : ''} />
    <input class="content__label" type="text" disabled value="${text}"
      style="text-decoration: ${checked ? 'line-through' : 'none' }" />
    <button class="content__cerrar">X</button>
  `;

  task.querySelector('.content__cb').addEventListener('click', onChecked);
  task.querySelector('.content__cerrar').addEventListener('click', onRemove);

  return task;
}