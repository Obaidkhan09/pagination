import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './components/home/Home';
import { getContent } from './features/contentSlice';

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const prop = {
    current : data.currentPage,
    items : data.perPage
  }
  useEffect(()=> {
    dispatch(getContent(prop));
  }, []);
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
