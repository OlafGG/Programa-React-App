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
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        
        return () => {
            console.log('Tasklist component is going to unmount...')
        };
    }, [tasks]);
    
    

    function completeTask(task){
        console.log('Complete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //we update the state of the component with the new list of tasks and it will update 
        //the iteration of the tasks in order to show the tasks update
        setTasks(tempTasks);
    }   

    function deleteTask(task){
        console.log('Delete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask (task){
        console.log('Delete this Task', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
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
                                        <TaskComponent 
                                            key={index} 
                                            task={task} 
                                            complete={completeTask}
                                            remove = {deleteTask}> 
                                        </TaskComponent>
                                    )
                                })}
                                
                            </tbody>
                        </table>
        )
    }
    let tasksTable = <Table></Table>;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable =  
        (
        <div>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }
    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
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
                        {//TODO: Add Loading Spinner
                        }
                        {loading ? <p style={loadingStyle}>Loading Task...</p> : tasksTable}
                    </div>
                    <TaskForm
                    add={addTask} nTasks={tasks.length}
                    ></TaskForm>
                </div>
            </div>
        </div>
    );
};



export default TaskListComponent;
