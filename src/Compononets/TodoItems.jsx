import React from "react";

export default function TodoItems(props) {
  return (
    <div>
      <li>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
        {props.text}
      </li>
    </div>
  );
}
