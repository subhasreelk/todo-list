function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task === '') return;
  const ul = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = task;

  // Add delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = function() {
    ul.removeChild(li);
  };

  li.appendChild(delBtn);
  ul.appendChild(li);
  input.value = '';
}