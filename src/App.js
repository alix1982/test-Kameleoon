import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { TextPage } from './components/textPage/TextPage';
import { Dashboard } from './components/dashboard/Dashboard';
import { Results } from './components/results/Results';
import { Finalize } from './components/finalize/Finalize';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000)
  },[])

  const [isSizeWindow, setIsSizeWindow] = useState('desctop');

  const setSize = () => {
      window.innerWidth <= 600 ? setIsSizeWindow('mobile') : setIsSizeWindow('desctop');
  }
  useEffect(()=>{
      setSize();
  },[]);

  useEffect(()=>{
      const onSizeWindow = () => { 
          setSize();
      };
      window.onresize = onSizeWindow;
  })

  return (
    <div className="app">
      <header></header>
      <main>
        {isSizeWindow === 'desctop' ?
          <Routes>
            <Route
              element={<TextPage text={'Welcome to the test task!'}/>}
              path="/"
            />
            <Route
              element={<Dashboard/>}
              path="dashboard"
            />
            <Route
              element={<Results/>}
              path='results/:id'
            />
            <Route
              element={<Finalize/>}
              path="finalize/:id"
            />
          </Routes> :
          <TextPage text={'Мобильная версия в разработке, перейдите на ПК'}/>
        }
        
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
