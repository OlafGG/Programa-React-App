import { Link, Route, BrowserRouter as RouterOne, Navigate, Routes } from 'react-router-dom';
import {useEffect} from 'react';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPages from './pages/about-faqs/AboutPages';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import LoginPage from './pages/auth/LoginPage';


 function AppRouting() {


  let logged = false;

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
          <Link to='faqs'>| ABOUT |</Link>
          <Link to='una404'> |Dosen't exists|</Link>
          <Link to='/profile'>| Profile |</Link>
          <Link to='/tasks'></Link>
          <Link to='/login'></Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' Component={<HomePage/>}></Route>
            <Route path='/login' Component={<LoginPage/>}>
              {
                logged ? 
                () => {
                  alert('You are logged in. Navigating to home...')
                  return (<Navigate to='/' />) 
                }
                : 
                () => {
                  return (<LoginPage></LoginPage>) 
                }
              }
            </Route>
            <Route path='/{about|faqs}' Component={<AboutPages/>}></Route>
            <Route path='/profile' Component={<ProfilePage/>}>
              {
                logged ? 
                <ProfilePage /> 
                :
                () => {
                  alert('You must be logged in. Navigating to login ...')
                  return (<Navigate to='/login' />) 
                }
              }
            </Route>
            <Route path='/tasks' Component={<TasksPage/>}></Route>
            <Route path='/task/:id' Component={<TasksDetailPage/>}></Route>
            <Route Component={<NotFoundPage/>}></Route>
          </Routes>
        </main>
      </div>


      
    </RouterOne>
  );
}

export default AppRouting;
