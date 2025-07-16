import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({
  todoItems,
  onComplete,
  onDelete,
  ...props
}) {
  return (
    <ul className="todoList">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
