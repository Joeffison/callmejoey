import './styles/App.scss';
import 'animate.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Home } from "./home";
import { AboutMe } from "./aboutme";

const App = () => (
  <div className="App">
    <Home />
    <AboutMe />
  </div>
);

export default App;
