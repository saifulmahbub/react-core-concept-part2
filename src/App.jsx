import "./App.css";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("button CLicked");
  }
  function handleClick2() {
    alert("Button CLicked 2");
  }
  function handleClick4(num) {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concept-2</h1>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Clicked Me 2</button>
      <button
        onClick={() => {
          alert("hey, i am clicked again!");
        }}
      >
        Click me again
      </button>
      {/* a bit confusing ,but it solves the problem of calling function befor clciking  */}
      <button onClick={() => handleClick4(10)}>Button 4</button>
    </>
  );
}

export default App;
