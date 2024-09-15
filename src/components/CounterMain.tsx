import { useState } from 'react'
import { v1 } from 'uuid'
import { Button } from './Button'

type InputValuesType = {
	maxValue: number
	startValue: number
}

export const CounterMain = ({ maxValue, startValue }: InputValuesType) => {
	let [count, setCount] = useState(startValue)

	const incrementCounter = () => {
		if (count < maxValue && maxValue !== 0) {
			setCount(count + 1)
		}
	}
	const resetCounter = () => {
		setCount(startValue)
	}

	const disabledInc = count === maxValue
	const disabledReset = count === startValue

	const buttonData = [
		{
			id: v1(),
			title: 'inc',
			onClickHandler: incrementCounter,
			activeButton: disabledInc,
		},
		{
			id: v1(),
			title: 'reset',
			onClickHandler: resetCounter,
			activeButton: disabledReset,
		},
	]

	return (
		<div className='counter__window'>
			<div className='counter__background'>
				<h1 className={count === maxValue ? 'redCounter' : ''}>{count}</h1>
			</div>
			<div className='buttons__items'>
				{buttonData.map(t => (
					<Button
						key={t.id}
						title={t.title}
						onClick={t.onClickHandler}
						activeButton={t.activeButton}
					/>
				))}
			</div>
		</div>
	)
}
