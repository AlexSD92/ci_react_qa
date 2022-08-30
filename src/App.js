import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Questions from './components/Questions';
import Answers from './components/Answers';
import Profile from './components/Profile';
import './api/axiosDefaults';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={'/profiles'} element={<Profile />}></Route>
        <Route path={'/questions'} element={<Questions />}></Route>
        <Route path={'/answers'} element={<Answers />}></Route>
        <Route path={'/register'} element={<Register />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
