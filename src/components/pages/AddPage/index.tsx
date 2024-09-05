import { FC, useEffect, useState } from "react"
import BaseTemplate from "../../templates/BaseTemplate"
import { useDispatch } from "react-redux"
import { timeSlice } from "../../../store/reducers/timeSlice"

import "./index.scss"

const AddPage: FC = () => {
	useEffect(() => {
		document.title = "React + Redux + TS | Add user"
	}, [])

	const dispatch = useDispatch()
	const { addUser } = timeSlice.actions

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")

	return (
		<BaseTemplate>
			<form
				className='add-form'
				onSubmit={(e) => {
					e.preventDefault()
					const user = {
						id: Number(new Date()),
						name,
						email
					}

					dispatch(addUser(user))
				}}
			>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					autoComplete='name'
					type='text'
					placeholder='Name'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					autoComplete='email'
					type='text'
					placeholder='E-mail'
				/>
				<button type='submit'>Save</button>
			</form>
		</BaseTemplate>
	)
}

export default AddPage
