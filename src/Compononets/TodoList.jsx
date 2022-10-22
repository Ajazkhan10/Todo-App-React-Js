import React, { useState } from "react";
import TodoItems from "./TodoItems";

export default function TodoList() {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfitems = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    console.log("delete");
    setItems((olditems) => {
      return olditems.filter((arrElemenet, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_container">
      <div className="center_container">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Enter Items"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfitems}>+</button>
        <ol>
          {items.map((itemValue, index) => {
            return (
              <TodoItems
                key={index}
                id={index}
                text={itemValue}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
