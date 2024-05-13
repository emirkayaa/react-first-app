import Home from './components/home';
import { useState } from 'react';

function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setOpen(open => !open)}>{open ? 'Gizle' : 'Göster'}</button>
      {open && <Home/>}
    </div>
  );
}

export default App;
