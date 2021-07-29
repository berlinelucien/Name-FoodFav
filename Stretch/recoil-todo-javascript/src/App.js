import TodoList from './components/TodoList';
import CharacterCounter from './components/CharacterCounter';
import './App.css';

function App() {
  return (
    <div class="tab">
      <h2>Demo 1: CharacterCounter</h2>
      <CharacterCounter />
      <br></br>
      <br></br>
      <h2>Demo 2: Todo list</h2>
      <TodoList />
    </div>

  );
}

export default App;
