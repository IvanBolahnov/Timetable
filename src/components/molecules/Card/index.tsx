import { FC } from "react"
import { timeType } from "../../../store/reducers/timeSlice"
import { useDispatch } from "react-redux"
import { timeSlice } from "../../../store/reducers/timeSlice"

import "./index.scss"

type UserCardPropType = {
	user: timeType
}

const UserCard: FC<UserCardPropType> = ({ user }) => {
	const dispatch = useDispatch()

	const { deleteUser } = timeSlice.actions

	return (
		<div className='card'>
			<table>
				<tbody>
					<tr>
						<td>Id</td>
						<td>{user.id}</td>
					</tr>
					<tr>
						<td>Name</td>
						<td>{user.name}</td>
					</tr>
					<tr>
						<td>E-mail</td>
						<td>{user.email}</td>
					</tr>
					<tr>
						<td colSpan={2} className='card__delete'>
							<button
								onClick={() => {
									dispatch(deleteUser(user.id))
								}}
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default UserCard
