import { useDispatch } from 'react-redux'
import { v1 } from 'uuid'
import {
	incrementCounterAC,
	InitialStateType,
	resetCounterAC,
} from '../model/counter-reducer'
import { Button } from './Button'

export const CounterMain = ({
	maxValue,
	startValue,
	enterValues,
	count,
}: InitialStateType) => {
	const dispatch = useDispatch()

	const incrementCounter = () => {
		if (count < maxValue && maxValue !== startValue) {
			dispatch(incrementCounterAC())
		}
	}
	const resetCounter = () => {
		dispatch(resetCounterAC())
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
				<h1 className={count === maxValue ? 'redCounter' : 'count'}>
					{!enterValues ? (
						count
					) : (
						<span className='enterValues'>enter values and press 'set'</span>
					)}
				</h1>
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
