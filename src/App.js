import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './components/home/Home';
import { getContent } from './features/contentSlice';

function App() {
  const currentPage = useSelector((state) => state.data.currentPage);
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getContent(currentPage));
  }, []);
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
