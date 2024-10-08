export type InitialStateType = {
	maxValue: number
	startValue: number
	count: number
	enterValues: boolean
}

const initialState: InitialStateType = {
	maxValue: 0,
	startValue: 0,
	count: 0,
	enterValues: false,
}

export const counterReducer = (
	state: InitialStateType = initialState,
	action: ActionType
) => {
	switch (action.type) {
		case 'SET_MAX_VALUE': {
			return { ...state, maxValue: action.payload }
		}
		case 'SET_START_VALUE': {
			return { ...state, startValue: action.payload, count: action.payload }
		}
		case 'INCREMENT_COUNTER': {
			return { ...state, count: state.count + 1 }
		}
		case 'RESET_COUNTER': {
			return { ...state, count: state.startValue }
		}
		case 'SET_ENTER_VALUES': {
			return { ...state, enterValues: action.payload }
		}
		case 'SET_VALUES': {
			return {
				...state,
				maxValue: action.payload.maxValue,
				startValue: action.payload.startValue,
				count: action.payload.startValue,
				enterValues: false,
			}
		}

		default:
			return state
	}
}

export type setMaxValueAction = ReturnType<typeof setMaxValueAC>
export type setStartValueAction = ReturnType<typeof setStartValueAC>
export type incrementCounterAction = ReturnType<typeof incrementCounterAC>
export type resetCounterAction = ReturnType<typeof resetCounterAC>
export type setEnterValuesAction = ReturnType<typeof setEnterValuesAC>
export type setValuesACAction = ReturnType<typeof setValuesAC>

export type ActionType =
	| setMaxValueAction
	| setStartValueAction
	| incrementCounterAction
	| resetCounterAction
	| resetCounterAction
	| setEnterValuesAction
	| setValuesACAction

export const setMaxValueAC = (maxValue: number) =>
	({
		type: 'SET_MAX_VALUE',
		payload: maxValue,
	} as const)

export const setStartValueAC = (startValue: number) =>
	({
		type: 'SET_START_VALUE',
		payload: startValue,
	} as const)

export const incrementCounterAC = () =>
	({
		type: 'INCREMENT_COUNTER',
	} as const)

export const resetCounterAC = () =>
	({
		type: 'RESET_COUNTER',
	} as const)

export const setEnterValuesAC = (enterValues: boolean) =>
	({
		type: 'SET_ENTER_VALUES',
		payload: enterValues,
	} as const)

export const setValuesAC = (payload: {
	maxValue: number
	startValue: number
}) => ({
	type: 'SET_VALUES',
	payload,
})
