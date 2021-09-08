import { Backdrop, Button, Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Todo.css";
import { Modal } from "@material-ui/core";
import { deleteTodo, updateTodo } from "../../functions";

function Todo({ todo, onActionPerformed }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle(todo.title);
    setContent(todo.content);
  }, [todo]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTodo(todo._id, { title: title, content: content });
    onActionPerformed();
    setOpen(false);
  };
  const removeTodo = async (id) => {
    await deleteTodo(id);
    onActionPerformed();
  };
  return (
    <div className="todo">
      <div className="task">
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
      </div>
      <div className="actions">
        <Button className="actionBtn" onClick={(e) => setOpen(true)}>
          Edit
        </Button>
        <Button
          className="actionBtn delete__button"
          onClick={(e) => removeTodo(todo._id)}
        >
          Delete
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        className="modal_content"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="modal_body">
            <h2>Update Todo</h2>
            <form className="update_form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="form_actions">
                <Button
                  className="actionBtn close__button"
                  onClick={(e) => setOpen(false)}
                >
                  Close
                </Button>
                <Button className="actionBtn update__button" type="submit">
                  Update
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Todo;
