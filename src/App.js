import './App.css';
import Home from './home/Home';
import Appbar from './component/Appbar';

function App() {
  return (
    <div className="App">
      <Appbar />
      
      <Home />

      <div id="footer">
        <p>Copyright © 2022 All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
