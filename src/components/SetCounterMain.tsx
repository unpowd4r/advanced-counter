import { useState } from 'react'
import { InputsValue } from './InputValue'

type SetValuesType = {
	changeSetHandlerMaxValue: (valueMax: number) => void
	changeSetHandlerStartValue: (valueStart: number) => void
	textValuesCounterUnCorrect: () => void
	textValuesOnBlurUnCorrectHandler: () => void
	maxValue: number
	startValue: number
	enterValues: string
}

export const SetCounterMain = ({
	changeSetHandlerStartValue,
	changeSetHandlerMaxValue,
	textValuesCounterUnCorrect,
	textValuesOnBlurUnCorrectHandler,
	enterValues,
	maxValue,
	startValue,
}: SetValuesType) => {
	const [valueMax, setValueMax] = useState(0)
	const [valueStart, setValueStart] = useState(0)
	const [clicked, setClicked] = useState(0)

	const onChangeUpdateMaxValues = (maxValue: number) => {
		setValueMax(maxValue)
	}

	const onChangeUpdateStartValues = (startValue: number) => {
		setValueStart(startValue)
	}

	const setUpdateValuesHandler = () => {
		changeSetHandlerMaxValue(valueMax)
		changeSetHandlerStartValue(valueStart)
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
