import './TodoForm.css';
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }

    return <div className="todo-form">
        <h2>Add Task:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="task name" value={value}
                onChange={(e) => setValue(e.target.value)} />
            <div className="flex-form">
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">select a category</option>
                    <option value="Business">business</option>
                    <option value="Education">education</option>
                    <option value="Personal">personal</option>
                </select>
                <button type="submit" className="add">Add</button>
            </div>
        </form>
    </div>
}

export default TodoForm;