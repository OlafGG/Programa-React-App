import { Link, Route, BrowserRouter as RouterOne, Navigate, Routes } from 'react-router-dom';
import {useEffect} from 'react';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPages from './pages/about-faqs/AboutPages';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';


function AppRouting() {


  let logged = localStorage.getItem('credentials');

  let taskList = [
    {
      id: 1, 
      name: 'task1',
      description: 'First task'
    },
    {
      id: 2, 
      name: 'task2',
      description: 'Second task'
    },
    {
      id: 3, 
      name: 'task3',
      description: 'Third task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged)
  }, []);

  return (
    <RouterOne>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'> |Tarea 1|</Link>
          <Link to='/una404'> |Dosen't exists|</Link>
          <Link to='/profile'>| Profile |</Link>
          <Link to='/tasks'></Link>
          <Link to='/login'>| Login |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' Component={HomePage}></Route>
            <Route exact path='/online-state' Component={StatePage}></Route>
            <Route path='/login' Component={LoginPage}>
              {
                logged ? 
                () => {
                  alert('You are logged in. Redireting to home...');
                  return (<Navigate to='/' />)
                }
                : 
                () => {
                  return (<LoginPage />)
                }
              }
            </Route>
            <Route path='/about' Component={AboutPages}/>
            <Route path='/faqs' Component={AboutPages}/>
            <Route path='/profile' Component={ProfilePage} >
              {
                logged ? 
                () => {
                  return (<Navigate to='/' />)
                }
                : 
                () => {
                  alert('You must be logged. Redireting to login...');
                  return (<Navigate to='/login' />)
                }
              } 
            </Route>

            <Route path='/tasks' Component={TasksPage}></Route>
            <Route 
              exact  
              path='/task/:id' 
              render = {
                ({match}) => (<TasksDetailPage task={taskList[match.params.id-1]}/>)
              }
              >

            </Route>
            <Route path='una404' Component={NotFoundPage}></Route>
          </Routes>
        </main>
      </div>


      
    </RouterOne>
  );
}

export default AppRouting;
