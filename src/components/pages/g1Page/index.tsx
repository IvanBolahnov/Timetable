import { FC, useEffect } from "react"
import BaseTemplate from "../../templates/BaseTemplate"
import Timetable from "../../organisms/Timetable"
import { RootState } from "../../../store"
import { useSelector } from "react-redux"

import "./index.scss"

const G1Page: FC = () => {
	useEffect(() => {
		document.title = "Timetable | 23ВЭ2"
	}, [])

	const timeTable = useSelector((state: RootState) => state.time).g1

	return (
		<BaseTemplate pageName='group-1'>
			<h2>Первая неделя</h2>
			<Timetable table={timeTable.week1.monday} />
			<Timetable table={timeTable.week1.tuesday} />
			<Timetable table={timeTable.week1.wednesday} />
			<Timetable table={timeTable.week1.thursday} />
			<Timetable table={timeTable.week1.friday} />
			<Timetable table={timeTable.week1.saturday} />
			<Timetable table={timeTable.week1.sunday} />
			<h2>Вторая неделя</h2>
			<Timetable table={timeTable.week2.monday} />
			<Timetable table={timeTable.week2.tuesday} />
			<Timetable table={timeTable.week2.wednesday} />
			<Timetable table={timeTable.week2.thursday} />
			<Timetable table={timeTable.week2.friday} />
			<Timetable table={timeTable.week2.saturday} />
			<Timetable table={timeTable.week2.sunday} />
		</BaseTemplate>
	)
}

export default G1Page
