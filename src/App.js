import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import routes from "./routes"
function App() {
  return (
    <div>
      <h1 className="header">Contact-List App</h1>
    <BrowserRouter>
          <HomePage/>
    </BrowserRouter>
    </div>
  );
}


export default App;
