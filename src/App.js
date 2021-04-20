import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './styles/App.scss';

import { Home } from "./home";
import { AboutMe } from "./aboutme";
import AppTransition from "./components/AppTransition";

const App = () => {
  return (
    <div className="App">
      <AppTransition
        pages={[<Home/>, <AboutMe/>]}
      />
    </div>
  )
};

export default App;
