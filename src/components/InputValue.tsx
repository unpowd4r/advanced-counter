import { ChangeEvent, useState } from 'react'

type OnChangeValuesType = {
	onChangeUpdateMaxValues: (maxValue: number) => void
	onChangeUpdateStartValues: (startValue: number) => void
}

export const InputsValue = ({
	onChangeUpdateMaxValues,
	onChangeUpdateStartValues,
}: OnChangeValuesType) => {
	const [maxValues, setMaxValues] = useState<number>(0)
	const [startValues, setStartValues] = useState<number>(0)

	const onChangeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValues(parseInt(e.currentTarget.value))
		onChangeUpdateMaxValues(parseInt(e.currentTarget.value))
	}

	const onChangeInputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setStartValues(parseInt(e.currentTarget.value))
		onChangeUpdateStartValues(parseInt(e.currentTarget.value))
	}

	return (
		<div className='counter__start__values'>
			<div className='values_values'>
				<div className='counter__text'>max value:</div>
				<input
					className='input__max__value'
					type='number'
					value={maxValues}
					onChange={onChangeInputMaxHandler}
				/>
			</div>
			<div className='values_values'>
				<div className='counter__text'>start value:</div>
				<input
					className='input__start__value'
					type='number'
					value={startValues}
					onChange={onChangeInputStartHandler}
				/>
			</div>
		</div>
	)
}
