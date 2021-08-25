import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <h1> Clock Ticking Assignment</h1>
      <FunctionComponent/>
      <ClassComponent/>
    </div>
  );
}

export default App;
