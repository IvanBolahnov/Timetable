import { createSlice } from "@reduxjs/toolkit"
import { week1 as g1Week1, week2 as g1Week2 } from "../../utils/g1Data"
import { WeekType } from "../../utils/dataType"

export type GroupType = {
	week1: WeekType
	week2: WeekType
}

export type timeStateType = {
	g1: GroupType
	nowTime: number
	nowDayIndex: number
}

const nowDate = new Date()

const initialState: timeStateType = {
	g1: {
		week1: g1Week1,
		week2: g1Week2
	},
	nowTime: nowDate.getHours() * 60 + nowDate.getMinutes(),
	nowDayIndex: nowDate.getDay()
}

export const timeSlice = createSlice({
	name: "time",
	initialState,
	reducers: {}
})

export default timeSlice.reducer
