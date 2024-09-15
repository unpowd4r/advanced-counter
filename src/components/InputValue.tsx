import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from './Button'

type OnChangeValuesType = {
	onChangeUpdateMaxValues: (maxValue: number) => void
	onChangeUpdateStartValues: (startValue: number) => void
	setUpdateValuesHandler: () => void
	textValuesCounterUnCorrect: () => void
	textValuesOnBlurUnCorrectHandler: () => void
	enterValues: string
	maxValue: number
	startValue: number
}

export const InputsValue = ({
	onChangeUpdateMaxValues,
	onChangeUpdateStartValues,
	setUpdateValuesHandler,
	textValuesCounterUnCorrect,
	textValuesOnBlurUnCorrectHandler,
	enterValues,
	maxValue,
	startValue,
}: OnChangeValuesType) => {
	const [maxValues, setMaxValues] = useState(maxValue)
	const [startValues, setStartValues] = useState(startValue)

	const disabledButton =
		maxValues > startValues &&
		maxValues > -1 &&
		startValues !== maxValues &&
		startValues > -1 &&
		startValues !== maxValues

	useEffect(() => {
		const maxValueFromLocalStorage = localStorage.getItem('maxValue')
		if (maxValueFromLocalStorage) {
			setMaxValues(parseInt(maxValueFromLocalStorage))
		}

		const startValueFromLocalStorage = localStorage.getItem('startValue')
		if (startValueFromLocalStorage) {
			setStartValues(parseInt(startValueFromLocalStorage))
		}
	}, [])

	const onChangeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let targetVal = parseInt(e.currentTarget.value)
		if (!isNaN(targetVal)) {
			setMaxValues(targetVal)
			onChangeUpdateMaxValues(targetVal)
		} else {
			setMaxValues(0)
			onChangeUpdateMaxValues(0)
		}
	}

	const onChangeInputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let targetVal = parseInt(e.currentTarget.value)
		if (!isNaN(targetVal)) {
			setStartValues(targetVal)
			onChangeUpdateStartValues(targetVal)
		} else {
			setStartValues(0)
			onChangeUpdateStartValues(0)
		}
	}

	const textValuesCounterUnCorrectHandler = () => {
		textValuesCounterUnCorrect()
	}

	return (
		<>
			<div className='inputs__values'>
				<div className='values_values'>
					<div className='counter__text'>max value:</div>
					<input
						className={
							maxValues > startValues &&
							maxValues > -1 &&
							startValues !== maxValues
								? 'input__max__value'
								: 'incorrect-value'
						}
						type='number'
						value={maxValues}
						onChange={onChangeInputMaxHandler}
						onClick={textValuesCounterUnCorrectHandler}
						onBlur={textValuesOnBlurUnCorrectHandler}
					/>
				</div>
				<div className='values_values'>
					<div className='counter__text'>start value:</div>
					<input
						className={
							maxValues > startValues &&
							maxValues > -1 &&
							startValues !== maxValues
								? 'input__start__value'
								: 'incorrect-value'
						}
						type='number'
						value={startValues}
						onChange={onChangeInputStartHandler}
						onClick={textValuesCounterUnCorrectHandler}
						onBlur={textValuesOnBlurUnCorrectHandler}
					/>
				</div>
			</div>

			<div className='button__item'>
				<Button
					activeButton={!disabledButton}
					title={'set'}
					onClick={setUpdateValuesHandler}
				/>
			</div>
		</>
	)
}
