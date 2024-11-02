
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div>
          <form>
            <p>Hello,
              Update your Info </p>
            <input type="text" name="Name" placeholder="Enter name" required></input>
            <input type="number" name="Age" placeholder="Enter your age" required ></input>
            <input type="text" name="Address" placeholder="Enter Address" required></input>
            <input type="text" name="Pno" placeholder="Enter Phone num" required></input>
            <button type="submit"> Save Info </button>
          </form>

        </div>
      </header>
    </div>
  );
}

export default App;
