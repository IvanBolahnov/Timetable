import { FC } from "react"
import { minToDateStr } from "../../../utils/dateUtils"
import { DayType } from "../../../utils/dataType"

import "./index.scss"

type TimeTablePropType = {
	table: DayType
}

const Timetable: FC<TimeTablePropType> = ({ table }) => {
	// return <>{JSON.stringify(table)}</>
	return (
		<div className='timetable__wrapper'>
			<table className='timetable'>
				<tr>
					<td>Начало</td>
					<td>Конец</td>
					<td>Предмет</td>
					<td>Кабинет</td>
					<td>Преподаватель</td>
				</tr>
				{table.map((line) => (
					<tr key={line.startTime}>
						<td className='timetable__line-start-time'>
							{minToDateStr(line.startTime)}
						</td>
						<td className='timetable__line-end-time'>
							{minToDateStr(line.endTime)}
						</td>
						<td className='timetable__line-title'>{line.title}</td>
						<td className='timetable__line-place'>{line.place}</td>
						<td className='timetable__line-teacher'>{line.teacher}</td>
					</tr>
				))}
			</table>
		</div>
	)
}

export default Timetable
