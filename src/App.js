import { useState } from 'react';
import './App.css';
import GradeInputs from './GradeInputs';

function App() {
  const [finalPercentNecessary, setFinalPercentNecessary] = useState();

  return (
    <div className="App">
      <GradeInputs setFinalPercentNecessary={setFinalPercentNecessary} />
      {finalPercentNecessary ? <p>You need to earn at least a {finalPercentNecessary}% on your final exam</p> : null}
    </div>
  );
}

export default App;
