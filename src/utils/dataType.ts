export type MinuteType = number
export type HourType = number

export type DateStrType =
	| `${HourType}:${MinuteType}`
	| `${HourType}:0${MinuteType}`
// export type DateStrNormalizeType = `${HourType}:${MinuteType}` |

export type LineTitleType =
	| "Физ-ра"
	| "Основы проектной деятельности лек."
	| "Кураторский час"
	| "Основы проектной деятельности пр."
	| "БЖД пр."
	| "Философия пр."
	| "Теория вероятностей и МС пр."
	| "ин. язык лб."
	| "БЖД лек."
	| "Прикладные методы оптимизации лек."
	| "Прикладные методы оптимизации лб."
	| "Програмиррование на языках высокого уровня лб."
	| "Програмиррование на языках высокого уровня лек."
	| "ОС лб."
	| "Теория вероятностей и МС лек."
	| "ОС лек."
	| "Экономика пр."
	| "Экономика лек."
	| "Философия лек."

export type LineType = {
	title: LineTitleType
	teacher: string
	startTime: number
	endTime: number
	place: string
}

export type DayType = LineType[]
export type WeekType = {
	monday: DayType
	tuesday: DayType
	wednesday: DayType
	thursday: DayType
	friday: DayType
	saturday: DayType
	sunday: DayType
}
