import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, nTasks }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(levels.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value, 
            descriptionRef.current.value,
            false, 
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockinglStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-item-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' placeholder='Task Name' type='text' className='form-control form-control-lg' required autoFocus></input>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'></input>
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select ref={levelRef} defaultValue={levels.NORMAL} id='selectLevel' className='form-control form-control-lg' >
                    <option value={levels.NORMAL}>
                        Normal
                    </option>
                    <option  value={levels.URGENT}>
                        Urgent
                    </option>
                    <option value={levels.BLOCKING}>
                        Blocking
                    </option>
                </select> 
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {nTasks > 0 ? 'Add New Task' : 'Crete yout task'}
                </button>
            </div>
           
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    nTasks: PropTypes.number.isRequired
}

export default TaskForm;
