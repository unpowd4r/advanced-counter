import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { CounterMain } from './components/CounterMain'
import { SetCounterMain } from './components/SetCounterMain'
import {
	setEnterValuesAC,
	setMaxValueAC,
	setStartValueAC,
} from './model/counter-reducer'
import { RootState } from './model/store'

function App() {
	const { maxValue, startValue, enterValues, count } = useSelector(
		(state: RootState) => state
	)
	const dispatch = useDispatch()

	const textValuesCounterUnCorrect = () => {
		dispatch(setEnterValuesAC(true))
	}

	const textValuesOnBlurUnCorrectHandler = () => {
		dispatch(setEnterValuesAC(true))
	}

	const changeSetHandlerMaxValue = (valueMax: number) => {
		dispatch(setMaxValueAC(valueMax))
	}
	const changeSetHandlerStartValue = (valueStart: number) => {
		dispatch(setStartValueAC(valueStart))
	}

	return (
		<div className='App'>
			<CounterMain
				count={count}
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
