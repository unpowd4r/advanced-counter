import {
	counterReducer,
	incrementCounterAC,
	InitialStateType,
	resetCounterAC,
	setEnterValuesAC,
	setMaxValueAC,
	setStartValueAC,
} from './counter-reducer'

let startState: InitialStateType
beforeEach(() => {
	startState = {
		maxValue: 0,
		startValue: 0,
		count: 0,
		enterValues: false,
	}
})

test('correct change max value', () => {
	const endState = counterReducer(startState, setMaxValueAC(2))

	expect(endState).toEqual({
		maxValue: 2,
		startValue: 0,
		count: 0,
		enterValues: false,
	})
})

test('correct change max value', () => {
	const endState = counterReducer(startState, setStartValueAC(1))

	expect(endState).toEqual({
		maxValue: 0,
		startValue: 1,
		count: 1,
		enterValues: false,
	})
})

test('correct change max value', () => {
	const endState = counterReducer(startState, incrementCounterAC())

	expect(endState).toEqual({
		maxValue: 0,
		startValue: 0,
		count: 1,
		enterValues: false,
	})
})

test('correct change max value', () => {
	const endState = counterReducer(startState, resetCounterAC())

	expect(endState).toEqual({
		maxValue: 0,
		startValue: 0,
		count: 0,
		enterValues: false,
	})
})

test('correct change max value', () => {
	const endState = counterReducer(startState, setEnterValuesAC(true))

	expect(endState).toEqual({
		maxValue: 0,
		startValue: 0,
		count: 0,
		enterValues: true,
	})
})
