import { useEffect, useState } from 'react'
import './App.css'
import { CounterMain } from './components/CounterMain'
import { SetCounterMain } from './components/SetCounterMain'

function App() {
	const [maxValue, setMaxValues] = useState(5)
	const [startValue, setStartValues] = useState(0)
	const [enterValues, setEnterValues] = useState('')

	const MAX_VALUE = 'maxValue'
	const START_VALUE = 'startValue'

	useEffect(() => {
		let maxValueAsString = localStorage.getItem(MAX_VALUE)
		if (maxValueAsString) {
			let newMaxValue = JSON.parse(maxValueAsString)
			setMaxValues(newMaxValue)
		}
	}, [])

	useEffect(() => {
		let startValueAsString = localStorage.getItem(START_VALUE)
		if (startValueAsString) {
			let newStartValue = JSON.parse(startValueAsString)
			setStartValues(newStartValue)
		}
	}, [])

	const textValuesCounterUnCorrect = () => {
		setEnterValues("enter values and press 'set'")
	}

	const textValuesOnBlurUnCorrectHandler = () => {
		setEnterValues('')
	}

	const changeSetHandlerMaxValue = (valueMax: number) => {
		setMaxValues(valueMax)
		localStorage.setItem(MAX_VALUE, JSON.stringify(valueMax))
	}
	const changeSetHandlerStartValue = (valueStart: number) => {
		setStartValues(valueStart)
		localStorage.setItem(START_VALUE, JSON.stringify(valueStart))
	}

	return (
		<div className='App'>
			<CounterMain
				maxValue={maxValue}
				startValue={startValue}
				enterValues={enterValues}
			/>
			<SetCounterMain
				textValuesOnBlurUnCorrectHandler={textValuesOnBlurUnCorrectHandler}
				textValuesCounterUnCorrect={textValuesCounterUnCorrect}
				changeSetHandlerMaxValue={changeSetHandlerMaxValue}
				changeSetHandlerStartValue={changeSetHandlerStartValue}
				maxValue={maxValue}
				startValue={startValue}
				enterValues={enterValues}
			/>
		</div>
	)
}

export default App
