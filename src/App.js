import logo from './logo.svg';
import './App.scss';
import mailIcon from './images/mail.png'
import githubIcon from './images/github.png'
import { GitHub } from 'react-feather';
import { Mail } from 'react-feather';

function App() {
  return (
    
    <div className="app">
      
      <div className='intro-container'>
      <header>
      <h1>Conor McDevitt</h1>
      <div className='about'>
        <p>Hello there! 👋 I'm Conor, a passionate and detail-oriented web developer with a love for creating clean and functional websites. I thrive on turning ideas into reality through code and design.</p>
      </div>
      <div className='icons'>
        <GitHub size={70} />
        <Mail size={70} />
      </div>
      </header>
      </div>

      <div className='cube-container'>
        <canvas></canvas>
      </div>
      
    </div>
  );
}

export default App;
