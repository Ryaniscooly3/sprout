import React, { useState } from "react";
import Modal from "react-modal";

function Prompt({ whatGoal, setGoal }) {

  const [modalIsOpen, setModalIsOpen] = useState(false); // desctructuring
  // sets the state
  // Function Prompt( { whatGoal, setGoal } ) {} same as function Prompt(props) {  const whatGoal = props.whatGoal;  const setGoal = props.setGoal;}

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter");
      setGoal(event.target.value);
      setModalIsOpen(false);
    }
  };

  return (
    <div className="prompt">
      <button onClick={() => setModalIsOpen(true)}>
      {/*<img className="photo" src={"setAGoal.png"} /> */}
      Set a Goal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>What is a goal you would like to achieve?</h2>
        <div>
          <input
          autoFocus
            type="text"
            value={whatGoal}
            onChange={(event) => setGoal(event.target.value)}
            onKeyPress={handleKeyPress}
          />
          {/* event returns an object containing data abt the onChange event (target = dom element acted upon)*/}
          {/*on change fire setGoal, set the value of value of WhatGoal*/}
          <button onClick={() => setModalIsOpen(false)}>Submit</button>
        </div>
      </Modal>
    </div>
  );
}

export default Prompt;
