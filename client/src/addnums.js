<script type="text/babel">
const { useState} = React;

function App() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(23);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="container">
      <h3 className="title">React Js Add Two Numbers</h3>
      <input
        type="number"
        className="input"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="number"
        className="input"
        value={num2}
        onChange={handleNum2Change}
      />
      <button className="button" onClick={handleAddition}>
        Add
      </button>
      <p className="result">Result: {result}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
</script>