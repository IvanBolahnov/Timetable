// 23ВЭ2

import { DayType, WeekType } from "./dataType"
import { dateStrToMin } from "./dateUtils"

const monday1: DayType = [
	{
		title: "Физ-ра",
		teacher: "",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "Тэмп"
	},
	{
		title: "Основы проектной деятельности лек.",
		teacher: "Кирюхин Ю.Г.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: ""
	}
]
const tuesday1: DayType = [
	{
		title: "БЖД пр.",
		teacher: "Вершинин Н.Н.",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "Тэмп"
	},
	{
		title: "Философия пр.",
		teacher: "Кириллов Г.М.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7а-307"
	},
	{
		title: "Теория вероятностей и МС пр.",
		teacher: "Пичугина П.Г.",
		startTime: dateStrToMin("11:40"),
		endTime: dateStrToMin("11:40") + 95,
		place: "7а-508"
	}
]
const wednesday1: DayType = [
	{
		title: "ин. язык лб.",
		teacher: "Еникеева С.М.",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "8-806"
	},
	{
		title: "БЖД лек.",
		teacher: "Вершинин Н.Н.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "1-307"
	}
]
const thursday1: DayType = [
	{
		title: "Програмиррование на языках высокого уровня лек.",
		teacher: "Убиенных А.Г.",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "7а-409"
	},
	{
		title: "Прикладные методы оптимизации лб.",
		teacher: "Баусова З.И.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7а-402"
	},
	{
		title: "Програмиррование на языках высокого уровня лб.",
		teacher: "Убиенных А.Г.",
		startTime: dateStrToMin("11:40"),
		endTime: dateStrToMin("11:40") + 95,
		place: "7а-405а"
	}
]
const friday1: DayType = [
	{
		title: "ОС лб.",
		teacher: "Убиенных А.Г.",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "7а-402"
	},
	{
		title: "Теория вероятностей и МС лек.",
		teacher: "Пичугина П.Г.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7б-202"
	}
]
const saturday1: DayType = [
	{
		title: "Физ-ра",
		teacher: "",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "Тэмп"
	},
	{
		title: "Экономика лек.",
		teacher: "Скворцов А.О.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7б-207"
	}
]
const sunday1: DayType = []

export const week1: WeekType = {
	monday: monday1,
	tuesday: tuesday1,
	wednesday: wednesday1,
	thursday: thursday1,
	friday: friday1,
	saturday: saturday1,
	sunday: sunday1
}

const monday2: DayType = [
	{
		title: "Физ-ра",
		teacher: "",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "Тэмп"
	},
	{
		title: "Кураторский час",
		teacher: "",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: ""
	},
	{
		title: "Основы проектной деятельности пр.",
		teacher: "Катышева М.А.",
		startTime: dateStrToMin("11:40"),
		endTime: dateStrToMin("11:40") + 95,
		place: ""
	}
]
const tuesday2: DayType = [
	{
		title: "Философия пр.",
		teacher: "Кириллов Г.М.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7а-307"
	},
	{
		title: "Теория вероятностей и МС пр.",
		teacher: "Пичугина П.Г.",
		startTime: dateStrToMin("11:40"),
		endTime: dateStrToMin("11:40") + 95,
		place: "7а-508"
	}
]
const wednesday2: DayType = [
	{
		title: "ин. язык лб.",
		teacher: "Еникеева С.М.",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "8-806"
	},
	{
		title: "БЖД лек.",
		teacher: "Вершинин Н.Н.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "1-307"
	},
	{
		title: "Прикладные методы оптимизации лек.",
		teacher: "Баусова З.И.",
		startTime: dateStrToMin("11:40"),
		endTime: dateStrToMin("11:40") + 95,
		place: ""
	}
]
const thursday2: DayType = [
	{
		title: "Програмиррование на языках высокого уровня лек.",
		teacher: "Убиенных А.Г.",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "7а-409"
	},
	{
		title: "Прикладные методы оптимизации лб.",
		teacher: "Баусова З.И.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7а-402"
	},
	{
		title: "Програмиррование на языках высокого уровня лб.",
		teacher: "Убиенных А.Г.",
		startTime: dateStrToMin("11:40"),
		endTime: dateStrToMin("11:40") + 95,
		place: "7а-405а"
	}
]
const friday2: DayType = [
	{
		title: "ОС лб.",
		teacher: "Убиенных А.Г.",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "7а-402"
	},
	{
		title: "ОС лек.",
		teacher: "Убиенных А.Г.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7б-204"
	},
	{
		title: "Экономика пр.",
		teacher: "Скворцов А.О.",
		startTime: dateStrToMin("11:40"),
		endTime: dateStrToMin("11:40") + 95,
		place: "7а-112"
	}
]
const saturday2: DayType = [
	{
		title: "Физ-ра",
		teacher: "",
		startTime: dateStrToMin("8:0"),
		endTime: dateStrToMin("8:0") + 95,
		place: "Тэмп"
	},
	{
		title: "Философия лек.",
		teacher: "Кириллов Г.М.",
		startTime: dateStrToMin("9:50"),
		endTime: dateStrToMin("9:50") + 95,
		place: "7б-204"
	}
]
const sunday2: DayType = []

export const week2: WeekType = {
	monday: monday2,
	tuesday: tuesday2,
	wednesday: wednesday2,
	thursday: thursday2,
	friday: friday2,
	saturday: saturday2,
	sunday: sunday2
}
