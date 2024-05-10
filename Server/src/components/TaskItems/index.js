import React from 'react';
import './index.css'

const TaskItems = ({ task, handleCheckboxChange,handleDelete }) => {
  

  const { id, title, status,assignedTo } = task;

  return (
    <li>
    <div className='taski-tem-container'>
      <h3 className='font-size weight'>{title}</h3>
      <p className= {`font-size m-r ${status==='pending'?'pending':'completed'}`}>{status}</p>
      <p className='font-size m-r'>{assignedTo}</p>
        <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between',alignItems:'center',height:"100%"}} className='font-size'>
        <input
          type="checkbox"
          className='checkbox'
          checked={status === 'complete'}
          onChange={() => handleCheckboxChange(id)}
        />
         <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
         </div>
      
      </div>
    </li>
  );
};

export default TaskItems;
