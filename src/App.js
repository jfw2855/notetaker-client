
import './App.css';
import { Header } from './components/Header';
import { NotesList } from './components/pages/NotesList';

function App() {
  return (
    <div className="App">
      <h1>connected to local host 3000 😍</h1>
      <Header/>
      <NotesList/>
    </div>
  );
}

export default App;
