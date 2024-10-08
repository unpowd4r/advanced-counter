import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setMaxValueAC, setStartValueAC } from '../model/counter-reducer'
import { Button } from './Button'

type OnChangeValuesType = {
	onChangeUpdateMaxValues: (maxValue: number) => void
	onChangeUpdateStartValues: (startValue: number) => void
	setUpdateValuesHandler: () => void
	textValuesCounterUnCorrect: () => void
	textValuesOnBlurUnCorrectHandler: () => void
	setClickedHandler: () => void
	enterValues: boolean
	maxValue: number
	startValue: number
	clicked: number
}

export const InputsValue = ({
	onChangeUpdateMaxValues,
	onChangeUpdateStartValues,
	setUpdateValuesHandler,
	textValuesCounterUnCorrect,
	textValuesOnBlurUnCorrectHandler,
	maxValue,
	startValue,
	setClickedHandler,
	clicked,
}: OnChangeValuesType) => {
	const dispatch = useDispatch()

	const onChangeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let targetVal = parseInt(e.currentTarget.value)

		dispatch(setMaxValueAC(targetVal))
		onChangeUpdateMaxValues(targetVal)
	}

	const onChangeInputStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let targetVal = parseInt(e.currentTarget.value)

		dispatch(setStartValueAC(targetVal))
		onChangeUpdateStartValues(targetVal)
	}

	const textValuesCounterUnCorrectHandler = () => {
		textValuesCounterUnCorrect()
		setClickedHandler()
	}

	const disabledButton =
		clicked !== 1 &&
		maxValue > startValue &&
		maxValue > -1 &&
		startValue !== maxValue &&
		startValue > -1 &&
		startValue !== maxValue

	return (
		<>
			<div className='inputs__values'>
				<div className='values_values'>
					<div className='counter__text'>max value:</div>
					<input
						className={
							maxValue > startValue && maxValue > -1 && startValue !== maxValue
								? 'input__max__value'
								: 'incorrect-value'
						}
						type='number'
						value={maxValue}
						onChange={onChangeInputMaxHandler}
						onClick={textValuesCounterUnCorrectHandler}
						onBlur={textValuesOnBlurUnCorrectHandler}
					/>
				</div>
				<div className='values_values'>
					<div className='counter__text'>start value:</div>
					<input
						className={
							maxValue > startValue &&
							startValue > -1 &&
							startValue !== maxValue
								? 'input__start__value'
								: 'incorrect-value'
						}
						type='number'
						value={startValue}
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
