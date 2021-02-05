import React from 'react';
import './App.css';
import AddToDo from './containers/AddToDo'
import ToDoContainer from './containers/ToDoContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <h1>My To Do List</h1>
      <AddToDo/>
      <Footer/>
      <ToDoContainer/>
    </div>
  );
}

export default App;
