import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.css';

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Tarea: ${task.name} va a deesaparecer`);
        };
    }, [task]);

    return (
        <div>
            <h2 className="task-name">
                Nombre: {task.name}
            </h2>
            <h3>
                Descripcion: {task.descripcion}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED':'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
