import Congrats from './components/congrats/congrats.component';
import GuessedWords from './components/guessed-words/guessed-words.component';
import './App.css';
import Input from './components/input/input.component';

function App() {
  return (
    <div className="App container">
      <h1>Jotto</h1>
      <Input />
      <Congrats isSuccess={true} />
      <GuessedWords guessedWords={[{ word: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
