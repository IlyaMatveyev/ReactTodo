import "./AddTodoItemForm.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function AddTodoItemForm({ onAddTodoItem, ...props }) {
  const emptyForm = {
    title: "",
    description: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTodoItem({
      ...form,
      id: new Date().getTime().toString(),
      isCompleted: false,
    });

    setForm(emptyForm);
  };

  const handleChangeTitle = (e) => {
    setIsFormValid(e.target.value.trim() === "" ? false : true);

    setForm((currentForm) => {
      return {
        ...currentForm,
        title: e.target.value,
        // id: new Date().getTime().toString(),
      };
    });
  };

  const handleChangeDescription = (e) => {
    setForm((currentForm) => {
      return {
        ...currentForm,
        description: e.target.value,
        // id: new Date().getTime().toString(),
      };
    });
  };

  return (
    <form id="addTodoItemForm" onSubmit={handleSubmit}>
      <div className="addTodoItemForm-InputContainer">
        <input
          type="text"
          name="label"
          placeholder="Task label"
          id="TaskLabel"
          onChange={handleChangeTitle}
          value={form.title}
          style={{ border: isFormValid ? null : "solid red 2px" }}
        />
        <textarea
          id="TaskDescription"
          placeholder="Task description"
          spellCheck="true"
          onChange={handleChangeDescription}
          value={form.description}
        />
      </div>

      <Button className={"btnAddTodoItem"} disabled={!isFormValid}>
        Add
      </Button>
    </form>
  );
}
