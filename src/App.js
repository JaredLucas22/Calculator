// File Path:
import './App.css';

function CalcuButton({ label }) {
  return (
    <button className="CalcuButton">
      {label}
    </button>
  );
}

function NameButton({ label }) {
  return (
    <button className="NameButton">
     {label}
    </button>
  );
}

function CalcuDisplay({ Display }) {
  return (
    <div className='CalcuDisplay'>
      {Display}
    </div>
  );
}

function App() {
  return (
    <div className='CalcContainer'>
      <CalcuDisplay Display={'0'} />
      <div className='ButtonContainer'>
        <CalcuButton label={7} />
        <CalcuButton label={8} />
        <CalcuButton label={9} />
        <CalcuButton label={"+"} />
        <CalcuButton label={4} />
        <CalcuButton label={5} />
        <CalcuButton label={6} />
        <CalcuButton label={"-"} />
        <CalcuButton label={1} />
        <CalcuButton label={2} />
        <CalcuButton label={3} />
        <CalcuButton label={"*"} />
        <CalcuButton label={"C"} />
        <CalcuButton label={0} />
        <CalcuButton label={"="} />
        <CalcuButton label={"÷"} />
      </div>
      <div className="NameButton">
        <NameButton label={"Miranda"} />
      </div>
    </div>
  );
}


// Running the Code:
export default App;
