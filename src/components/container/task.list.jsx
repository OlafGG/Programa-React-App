import React from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task ( 'Example', 'Default description', false, levels.NORMAL);

    return (
        <div>
            <div>
                Your Task: 
            </div>
            {/* TODO Aplicar un for para renderizar la lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
