import { FC, useEffect } from "react"
import BaseTemplate from "../../templates/BaseTemplate"
import { Link } from "react-router-dom"

import "./index.scss"

const RootPage: FC = () => {
	useEffect(() => {
		document.title = "Timetable"
	}, [])

	return (
		<BaseTemplate pageName='root-page'>
			<Link to='/g1'>
				<h2>23ВЭ2</h2>
			</Link>
			<Link to='/g2'>
				<h2>23ФПЗ1</h2>
			</Link>
		</BaseTemplate>
	)
}

export default RootPage
