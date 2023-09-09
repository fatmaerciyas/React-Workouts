import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); //if it's true show it
  //challenge
  const [countStep, setCounterStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 22 2027");
  date.setDate(date.getDate() + count);

  function handlePrevious() {
    step > 1 ? setStep((s) => s - 1) : setStep(step);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor="#e7e7e7"
              textColor="#333"
              onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
            >
              Learn how
            </Button>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
          <div className="counterStep" style={{ marginTop: 300 }}>
            <p>Challenge-1</p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#6750f2", color: "#fff" }}
                onClick={() => setCounterStep((c) => c - 1)}
              >
                -
              </button>
              <div>Count : {countStep} </div>
              <button
                style={{ backgroundColor: "#6750f2", color: "#fff" }}
                onClick={() => setCounterStep((c) => c + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="counter">
            <div className="buttons">
              <button
                style={{ backgroundColor: "#6750f2", color: "#fff" }}
                onClick={() => setCount((c) => c - countStep)}
              >
                -
              </button>
              <div>Count : {count} </div>
              <button
                style={{ backgroundColor: "#6750f2", color: "#fff" }}
                onClick={() => setCount((c) => c + countStep)}
              >
                +
              </button>
            </div>
          </div>
          <p>
            <span>
              {count === 0
                ? "Today is"
                : count < 0
                ? `${count} days from today is :`
                : `${count} days ago was `}
            </span>
            {date.toDateString()}
          </p>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      Step {step}
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
