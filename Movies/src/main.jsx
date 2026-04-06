
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Add from './Components/Add.jsx';
import Watched from './Components/Watched.jsx';
import Watchlist from './Components/Watchlist.jsx';
import ContextProvider from './Components/context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
  <>
   <Router>
    <ContextProvider>
     <App />
    <Header/>
    <Routes>
      <Route path='/' element={<Watchlist/>}></Route>
      <Route path='/watched' element={<Watched/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
    </Routes>
    </ContextProvider>
   </Router>
  </>
)
