import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <div className="form-container">
          <form>
            <p>Update your Info</p>
            <input type="text" name="Name" placeholder="Enter name" required />
            <input type="number" name="Age" placeholder="Enter your age" required />
            <input type="text" name="Address" placeholder="Enter Address" required />
            <input type="text" name="Pno" placeholder="Enter Phone num" required />
            <button type="submit">Save Info</button>
          </form>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
