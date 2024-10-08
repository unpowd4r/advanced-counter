import { legacy_createStore, Reducer } from 'redux'
import { ActionType, counterReducer, InitialStateType } from './counter-reducer'

export const store = legacy_createStore(
	counterReducer as Reducer<InitialStateType, ActionType>
)

export type RootState = ReturnType<typeof store.getState>
