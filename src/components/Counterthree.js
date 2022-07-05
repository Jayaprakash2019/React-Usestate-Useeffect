import React, { useState, useEffect } from "react";

const Counterthree = () => {
  const [count, Afterchange] = useState(100);
  const[todo,setTodo] = useState({})

  useEffect(() => {
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  const decrement = () => {
    Afterchange(count - 1);
  };

  const increment = () => {
    Afterchange(count + 1);
  };

  return (
    <div>
      <p>{JSON.stringify(todo)}</p>  
      <button onClick={decrement}> - </button>
      <span>{count}</span>

      <button onClick={increment}> + </button>
    </div>
  );
};

export default Counterthree;
