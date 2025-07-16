import "./TodoItem.css";
import Button from "../Button/Button";

export default function TodoItem({ item, onComplete, onDelete, }) {
  return (
    <li
      className={item.isCompleted ? "todoItem todoItem-Completed" : "todoItem"}
    >
      <div className="todoItem-textContainer">
        <p>
          <strong className="todoItem-textContainer-label">{item.title}</strong>
          <br />
          <span className="todoItem-textContainer-description">
            {item.description}
          </span>
        </p>
      </div>

      <div className="todoItem-btnContainer">
        <Button className="btnCompleted" onClick={()=>onComplete(item.id)}>Completed</Button>
        <Button className="btnDelete" onClick={()=>onDelete(item.id)}>Delete</Button>
      </div>
    </li>
  );
}
