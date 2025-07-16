import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AddTodoItemForm from "./components/AddTodoItemForm/AddTodoItemForm";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import { useState, useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const items = localStorage.getItem("todoItems");

    return items ? JSON.parse(items) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleAdd = (newItem) => setTodoItems((items) => [...items, newItem]);
  const handleComplete = (itemId) =>
    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  const handleDelete = (itemId) =>
    setTodoItems((currentItems) =>
      currentItems.filter((item) => itemId !== item.id)
    );

  return (
    <>
      <Header>ToDo</Header>
      <Main>
        {/* Форма добавления задачи в список */}
        <AddTodoItemForm onAddTodoItem={handleAdd} />

        {/* Список задач с кнопками "Выполнено" и "Удалить" */}
        <TodoListContainer
          todoItems={todoItems}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </Main>
      <Footer>Creted by Ilya Matveyev</Footer>
    </>
  );
}

export default App;
