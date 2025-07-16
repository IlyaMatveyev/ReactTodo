import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AddTodoItemForm from "./components/AddTodoItemForm/AddTodoItemForm";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "Первая задача",
      description:
        "Описание первой задачи. Тут описывается задача в развёрнутом в развёрнутом в развёрнутом виде.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Вторая задача",
      description: "Описание второй задачи.",
      isCompleted: true,
    },
    {
      id: 3,
      title: "задача #3",
      description: "",
      isCompleted: false,
    },
  ]);

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
