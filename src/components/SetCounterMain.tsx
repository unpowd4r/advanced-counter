import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	setMaxValueAC,
	setStartValueAC,
	setValuesAC,
} from '../model/counter-reducer'
import { InputsValue } from './InputValue'

type SetValuesType = {
	changeSetHandlerMaxValue: (valueMax: number) => void
	changeSetHandlerStartValue: (valueStart: number) => void
	textValuesCounterUnCorrect: () => void
	textValuesOnBlurUnCorrectHandler: () => void
	maxValue: number
	startValue: number
	enterValues: boolean
}

export const SetCounterMain = ({
	textValuesCounterUnCorrect,
	textValuesOnBlurUnCorrectHandler,
	maxValue,
	startValue,
	enterValues,
}: SetValuesType) => {
	const dispatch = useDispatch()

	const [clicked, setClicked] = useState(0)

	const onChangeUpdateMaxValues = (maxValue: number) => {
		dispatch(setMaxValueAC(maxValue))
	}

	const onChangeUpdateStartValues = (startValue: number) => {
		dispatch(setStartValueAC(startValue))
	}

	const setUpdateValuesHandler = () => {
		dispatch(setValuesAC({ maxValue, startValue }))
		setClicked(1)
	}

	const setClickedHandler = () => {
		setClicked(0)
	}

	return (
		<div>
			<div className='counter__windows'>
				<InputsValue
					textValuesOnBlurUnCorrectHandler={textValuesOnBlurUnCorrectHandler}
					onChangeUpdateMaxValues={onChangeUpdateMaxValues}
					onChangeUpdateStartValues={onChangeUpdateStartValues}
					setUpdateValuesHandler={setUpdateValuesHandler}
					textValuesCounterUnCorrect={textValuesCounterUnCorrect}
					enterValues={enterValues}
					maxValue={maxValue}
					startValue={startValue}
					setClickedHandler={setClickedHandler}
					clicked={clicked}
				/>
			</div>
		</div>
	)
}
