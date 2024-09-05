import {
	DateStrType,
	MinuteType,
	HourType,
	DayType,
	WeekType
} from "./dataType"

export const dateStrToMin = (dateStr: DateStrType): MinuteType => {
	const hour: HourType = Number(dateStr.split(":")[0])
	const minute: MinuteType = Number(dateStr.split(":")[1])

	return hour * 60 + minute
}

export const minToDateStr = (minute: MinuteType): DateStrType => {
	const hour = Math.floor(minute / 60)

	if (minute % 60 > 10) {
		return `${hour}:${minute % 60}`
	}

	return `${hour}:0${minute % 60}`
}

export const getNowDay = (week: WeekType, dayIndex: number): DayType => {
	const weekArray = [
		week.sunday,
		week.monday,
		week.tuesday,
		week.wednesday,
		week.thursday,
		week.friday,
		week.saturday
	]

	return weekArray[dayIndex]
}
