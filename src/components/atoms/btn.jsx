import React from "react";

export default (props) => {
  return (
    <button
      className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
