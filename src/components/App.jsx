import React, { useState } from "react";

function App() {
  const space = " ";
  const [nameOne, setNameOne] = useState(" ");
  const [nameTwo, setNameTwo] = useState(" ");
  const [submit, setSubmit] = useState(false);
  function handleChangeOne(event) {
    setNameOne(event.target.value);
    console.log(nameOne);
  }
  function handleChangeTwo(event) {
    setNameTwo(event.target.value);
  }
  function submitted() {
    setSubmit(true);
  }
  return (
    <div className="container">
      {submit ? (
        <h1>Submitted</h1>
      ) : (
        <h1>
          Hello {nameOne} {space}
          {nameTwo}
        </h1>
      )}
      <input
        onChange={handleChangeOne}
        type="text"
        placeholder="What's your first name?"
      />
      <input
        onChange={handleChangeTwo}
        type="text"
        placeholder="What's your last name?"
      />
      <button onClick={submitted}>Submit</button>
    </div>
  );
}

export default App;
