import { FC, ReactNode } from "react"
import Header from "../../organisms/Header"
import "./index.scss"

type baseTemplateProps = {
	footer?: ReactNode
	children: ReactNode
	pageName: string
}

const BaseTemplate: FC<baseTemplateProps> = ({
	children,
	footer,
	pageName
}) => {
	return (
		<>
			<Header></Header>
			<main className='main' id={pageName}>
				<div className='main__container'>{children}</div>
				{footer}
			</main>
		</>
	)
}

export default BaseTemplate
