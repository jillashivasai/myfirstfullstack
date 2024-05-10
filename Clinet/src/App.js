import './App.css';
import TaskListInterface from './components/TaskListInterface';
import TaskSummaryPage from './components/TaskSummaryPage';
import Task from './components/TaskListInterface/task';
import {  Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<TaskListInterface />}
          />
          <Route exact path='/task' element={<Task/>}/>
          <Route exact path="/summary" element={<TaskSummaryPage />} />
        </Routes>
    </div>
  );
}

export default App;
