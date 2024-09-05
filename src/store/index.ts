import { combineReducers, configureStore } from "@reduxjs/toolkit"

import timeSlice from "./reducers/timeSlice"

const rootReducer = combineReducers({
	time: timeSlice
})

export const store = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
