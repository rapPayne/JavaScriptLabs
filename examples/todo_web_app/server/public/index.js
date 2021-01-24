import { Todo } from './Todo.js';

let todos = [];
let todosSection;
const rootUrl = `.`;
const todosUrl = `${rootUrl}/todos`;

document.addEventListener('DOMContentLoaded', async e => {
  todosSection = document.getElementById("todos")
  await getTodos();
  showTodos();
});

const showTodos = () => {
  const html = todos.map(todo => makeTodo(todo)).join("");
  todosSection.innerHTML = html;
  console.log({ html });
}

const makeTodo = (todo) => {
  const { completed, title, priority } = todo;
  return `
  <section class="todo">
    <div class="priority priority-${priority}"></div>
    <label>
      <input type="checkbox" ${completed && "checked"} />
      <p class="title completed-${completed}">${title}</p>
    </label>
  </section>
  `
}

const toggleCompleted = (id) => {
  const todo = todos.find(t => t.id === id);
  todo.completed = !todo.completed;
  patchTodo(todo);
}

const getTodos = async () => {
  todos = await fetch(todosUrl)
    .then(res => res.json())
    .catch(err => console.error("Problem reading todos", err));
}

const patchTodo = async (todo) => {
  try {
    const res = await fetch(`${todosUrl}/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify(todo),
    })
  } catch (e) {
    console.log("Error updating todo", e)
  }
}