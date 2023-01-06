import { useState, useEffect } from 'react';
import './GradeInputs.css';

function GradeInputs({ setFinalPercentNecessary }) {
    const [desiredGrade, setDesiredGrade] = useState();
    const [currentGrade, setCurrentGrade] = useState();
    const [percentagePointsEarned, setPercentagePointsEarned] = useState();
    const [percentagePointsAvailable, setPercentagePointsAvailable] = useState();
    
    useEffect(() => {
        if (desiredGrade && currentGrade && percentagePointsEarned && percentagePointsAvailable) {
            const finalPercentNecessary = Math.min((desiredGrade - (currentGrade * percentagePointsEarned)) / percentagePointsAvailable, 100);
            setFinalPercentNecessary(finalPercentNecessary);
        }
    })

    return (
        <form className='wrapper'>
            <div>
                <label for="desired-grade">Desired grade:</label>
                <input type="number" min="0" max="100" step="0.1" value={desiredGrade} onChange={(event) => setDesiredGrade(event.target.value)} />                
            </div>

            <div>
                <label for="current-grade">Current grade:</label>
                <input type="number" min="0" max="100" step="0.1" value={currentGrade} onChange={(event) => setCurrentGrade(event.target.value)} />
            </div>

            <div>
                <label for="percentage-points-earned">Percentage points earned:</label>
                <input type="number" min="0" max="1" step="0.1" value={percentagePointsEarned} onChange={(event) => setPercentagePointsEarned(event.target.value)} />
            </div>

            <div>
                <label for="percentage-points-available">Percentage points available:</label>
                <input type="number" min="0" max="1" step="0.1" value={percentagePointsAvailable} onChange={(event) => setPercentagePointsAvailable(event.target.value)} />
            </div>

            <button type="button" onclick="drawChart()">Visualize</button>
        </form>
    );
}

export default GradeInputs;

