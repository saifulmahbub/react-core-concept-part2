import "./App.css";

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
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Clicked Me 2</button>
      <button
        onClick={() => {
          alert("hey, i am clicked again!");
        }}
      >
        Click me again
      </button>
      <button></button>
    </>
  );
}

export default App;
