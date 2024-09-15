import { useState } from 'react'
import { Button } from './Button'
import { InputsValue } from './InputValue'

type SetValuesType = {
	changeSetHandler: (valueMax: number, valueStart: number) => void
	maxValue: number
	startValue: number
}

export const SetCounterMain = ({ changeSetHandler }: SetValuesType) => {
	const [valueMax, setValueMax] = useState(0)
	const [valueStart, setValueStart] = useState(0)

	const onChangeUpdateMaxValues = (maxValue: number) => {
		setValueMax(maxValue)
	}

	const onChangeUpdateStartValues = (startValue: number) => {
		setValueStart(startValue)
	}

	const setUpdateValuesHandler = () => {
		changeSetHandler(valueMax, valueStart)
	}

	return (
		<div>
			<div className='counter__window'>
				<div className='counter__background'>
					<InputsValue
						onChangeUpdateMaxValues={onChangeUpdateMaxValues}
						onChangeUpdateStartValues={onChangeUpdateStartValues}
					/>
				</div>
				<div className='buttons__items'>
					<Button title={'set'} onClick={setUpdateValuesHandler} />
				</div>
			</div>
		</div>
	)
}
