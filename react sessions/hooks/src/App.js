import logo from './logo.svg';
import './App.css';

import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';
import MemoHook from './components/MemoHook';
import CallBackHook from './components/CallBackHook';

function App() {
  return (
    <div className="App">
      {/* <StateHook/> */}
      {/* <EffectHook/> */}
      <CallBackHook/>
      <MemoHook/>
    </div>
  );
}

export default App;
