import React from "react";
import { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <div>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onClick={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onClick={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onClick={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onClick={(event) =>
                handleChange("duration", event.target.value)
              }
            />
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserInput;
