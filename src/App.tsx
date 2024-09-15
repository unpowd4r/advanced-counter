import { useState } from 'react'
import './App.css'
import { CounterMain } from './components/CounterMain'
import { SetCounterMain } from './components/SetCounterMain'

function App() {
	const [maxValue, setMaxValues] = useState<number>(5)
	const [startValue, setStartValues] = useState<number>(0)

	const changeMaxValues = (newMaxValue: number) => {
		setMaxValues(newMaxValue)
	}

	const changeStartValues = (newStartValue: number) => {
		setStartValues(newStartValue)
	}

	const changeSetHandler = (valueMax: number, valueStart: number) => {
		changeMaxValues(valueMax)
		changeStartValues(valueStart)
	}

	return (
		<div className='App'>
			<CounterMain maxValue={maxValue} startValue={startValue} />
			<SetCounterMain
				changeSetHandler={changeSetHandler}
				maxValue={maxValue}
				startValue={startValue}
			/>
		</div>
	)
}

export default App
