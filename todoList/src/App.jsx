import { useState } from 'react'
import "./App.css";

import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Brincar com o Minho",
      category: "personal",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Terminar o relatório",
      category: "business",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar funções",
      category: "education",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='title-container'>
          <div class="title-item-1">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <h1>to do list</h1>
          <div class="title-item-2"></div>
        </div>
        <div className='content-container'>
          <div class="grid-1">
            <div class="item-1"></div>
            <div class="item-2"></div>
            <div class="item-3"></div>
            <div class="item-4">
              <h2>Task planner:</h2>
              <hr />
              <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
              {todos
                .filter((todo) =>
                  filter === "All"
                    ? true
                    : filter === "Completed"
                      ? todo.isCompleted
                      : !todo.isCompleted
                )
                .filter((todo) =>
                  todo.text.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) =>
                  sort === "Asc"
                    ? a.text.localeCompare(b.text)
                    : b.text.localeCompare(a.text)
                )
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                  />
                ))}
            </div>
          </div>
          <div class="grid-2">
            <div class="item-5"></div>
            <div class="item-6"></div>
            <div class="item-7">
              <TodoForm addTodo={addTodo} />
            </div>
            <div class="item-8">
              <Search search={search} setSearch={setSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
