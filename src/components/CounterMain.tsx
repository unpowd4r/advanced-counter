import { useState } from 'react'
import { v1 } from 'uuid'
import { Button } from './Button'

const MAX_VALUE = 5
const MIN_VALUE = 0

export const CounterMain = () => {
	let [count, setCount] = useState(0)

	const incrementCounter = () => {
		if (count < MAX_VALUE) {
			setCount(count + 1)
		}
	}
	const resetCounter = () => {
		setCount(0)
	}

	const disabledInc = count === MAX_VALUE
	const disabledReset = count === MIN_VALUE

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
				<h1 className={count === MAX_VALUE ? 'redCounter' : ''}>{count}</h1>
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
