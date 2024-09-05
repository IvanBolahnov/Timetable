import { FC, useEffect } from "react"
import BaseTemplate from "../../templates/BaseTemplate"
import { Link } from "react-router-dom"

import "./index.scss"

const G2Page: FC = () => {
	useEffect(() => {
		document.title = "Timetable | 23ФПЗ1"
	}, [])

	return (
		<BaseTemplate>
			<Link to='/g1'>23ВЭ2</Link>
			<Link to='/g2'>23ФПЗ1</Link>
		</BaseTemplate>
	)
}

export default G2Page
