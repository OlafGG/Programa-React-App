import React, { useState, useEffect } from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task ( 'Example', 'Default description', false, levels.NORMAL);
    
    const [tasks, setTasks] = useState(defaultTask);
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
            <div>
                <h1>
                    Your Task: 
                </h1>
            </div>
            {/* TODO Aplicar un for para renderizar la lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
