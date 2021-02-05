import React from 'react';
import './App.css';
import AddToDo from './containers/AddToDo'
import ToDoContainer from './containers/ToDoContainer'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <AddToDo />
      <ToDoContainer/>
      <Footer/>
    </div>
  );
}

export default App;
