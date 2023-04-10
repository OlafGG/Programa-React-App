import React, { useState, useEffect } from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
    
    const defaultTask1 = new Task ( 'Example1', 'Description 1', true, levels.NORMAL);
    const defaultTask2 = new Task ( 'Example2', 'Description 2', false, levels.URGENT);
    const defaultTask3 = new Task ( 'Example3', 'Description 3', true, levels.BLOCKING);
    
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //CONTROL DEL CICLO DE VIDA 

    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('Tasklist component is going to unmount...')
        };
    }, [tasks]);
    
    

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado')
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Task: 
                        </h5>
                    </div>
                    
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return(
                                        <TaskComponent key={index} task={task}></TaskComponent>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
};



export default TaskListComponent;
