import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Clouds from './components/background/Clouds'
import LOGO from './assets/donkey.png'


const App = () => {
  return (
   <Router>
    <div className="App">
      <div className="logo">
        <img src={LOGO} alt='logo' className='nav-logo' />
      </div>
      <Navbar />
      <Clouds />
    </div>
    <div className="content">
      <Routes>
        <Route  path="/" element={<Home />} />
      </Routes>
    </div>
   </Router>
  )
}

export default App