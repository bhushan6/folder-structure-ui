import './App.css';
import { SidePanel } from './components';
import { SelectionContext } from './contexts';

function App() {

  return (
    <div>
      <SelectionContext>
        <SidePanel/>
      </SelectionContext>
    </div>
  );
}

export default App;