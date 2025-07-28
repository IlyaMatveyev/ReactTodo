import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AddTodoItemForm from "./components/AddTodoItemForm/AddTodoItemForm";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const items = localStorage.getItem("todoItems");

    return items ? JSON.parse(items) : [];
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleAdd = (newItem) => {
    setTodoItems((items) => [...items, newItem]);
    setIsAddModalOpen(false);
  };
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
        <Button className="addBtn" onClick={() => setIsAddModalOpen(true)}>
          Add
        </Button>
        {/* Список задач с кнопками "Выполнено" и "Удалить" */}
        <TodoListContainer
          todoItems={todoItems}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
        {isAddModalOpen && (
          <Modal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            label={"Добавление новой задачи"}
          >
            {/* Форма добавления задачи в список */}
            <AddTodoItemForm onAddTodoItem={handleAdd} />
          </Modal>
        )}
      </Main>
      <Footer>Creted by Ilya Matveyev</Footer>
    </>
  );
}

export default App;
