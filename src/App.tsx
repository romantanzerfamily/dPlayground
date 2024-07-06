import './App.css';
import motokoLogo from './assets/motoko_moving.png';
import motokoShadowLogo from './assets/motoko_shadow.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import startpic from './assets/roman-bella-strand.jpg';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';

function App() {
  const { data: count, call: refetchCount } = useQueryCall({
    functionName: 'get',
  });

  const { call: increment, loading } = useUpdateCall({
    functionName: 'inc',
    onSuccess: () => {
      refetchCount();
    },
  });

  return (
    <div className="App">
      <header>
        <img src={startpic} className="logo startpic" alt="startpage logo" />
      </header>
      <h1>Roman's Virtual Home</h1>
      <div className="card">
        <button onClick={increment} disabled={loading}>
          count is {count?.toString() ?? 'loading...'}
        </button>
        <p>
          Edit <code>backend/Backend.mo</code> and save to test HMR
        </p>
      </div>

    </div>
  );
}

export default App;
