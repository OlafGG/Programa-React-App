import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.css';
import { levels } from '../../models/levels.enum';

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Tarea: ${task.name} va a deesaparecer`);
        };
    }, [task]);

    /**
     * Funtion that returns a Badge
     */
    function taskIconCompleted(){
        if(task.completed){
            return(<i className='bi-toggle-on' style={{color: 'green'}}></i>)
        }else{
            return(<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
        }

    }

    function taskLevelBadge(){
        switch (task.level) {
            case levels.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
                case levels.URGENT:
                    return(
                        <h6 className='mb-0'>
                            <span className='badge bg-warning'>
                                {task.level}
                            </span>
                        </h6>
                    )  
                    case levels.BLOCKING:
                        return(
                            <h6 className='mb-0'>
                                <span className='badge bg-danger'>
                                    {task.level}
                                </span>
                            </h6>
                        )    
            default:
                break;
        }
    }


    return (

        <tr className='fw-normal'>
            <th>
               <span className='ms-2'>{task.name}</span>
            </th>
            <td>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>

                { taskIconCompleted() }
                <i className='bi-trash' style={{color: 'tomato'}}></i>
            </td>
        </tr>


        // <div>
        //     <h2 className="task-name">
        //         Nombre: {task.name}
        //     </h2>
        //     <h3>
        //         Descripcion: {task.descripcion}
        //     </h3>
        //     <h4>
        //         Level: {task.level}
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED':'PENDING'}
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
