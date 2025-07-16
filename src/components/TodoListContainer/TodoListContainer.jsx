import "./TodoListContainer.css";
import TodoList from "../TodoList/TodoList";

export default function TodoListContainer({
  todoItems,
  onComplete,
  onDelete,
  ...props
}) {
  return (
    <div className="todoListContainer">
      <TodoList
        todoItems={todoItems}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    </div>
  );
}
