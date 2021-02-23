
import Animal from './Animal'
import Human from './human'
import Book from './Book'

function App() {
  return (
    <div>
    <h1>Animal</h1>
    <Animal mammal="dog"/>
    <Animal mammal="cat"/>
    <Animal mammal="tiger" name="rocco"/>
    <Human name="Sophia" location="Bay Area"/>
    
    </div>
  );
  }

export default App;
