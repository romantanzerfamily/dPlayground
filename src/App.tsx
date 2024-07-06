import './App.css';
import Note from './Note';
import startpic from './assets/roman-bella-strand.jpg';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';

function App() {
  const { data: count, call: refetchCount } = useQueryCall({
    functionName: 'get',
  });
  const { data: myNote, call: refetchNote } = useQueryCall({
    functionName: 'getNote',
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
      <Note
        author={myNote.author?.toString() ?? 'loading...'}
        title={myNote.title?.toString() ?? 'loading...'}
        text={myNote.text?.toString() ?? 'loading...'} />
      <div className="card">
        <button onClick={increment} disabled={loading}>
          count is {count?.toString() ?? 'loading...'}
        </button>
      </div>

    </div>
  );
}

export default App;
