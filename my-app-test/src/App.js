import './App.css';

function App() {
  console.log(process.env.REACT_APP_SOME_KEY)
  return (
    <div className="App">
      <h1>project to console env variable</h1>
    </div>
  );
}

export default App;
