import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./components/pages/RootPage"
import ErrorPage from "./components/pages/ErrorPage"
import G1Page from "./components/pages/g1Page"
import G2Page from "./components/pages/g2Page"

import "./App.scss"

const router = createBrowserRouter([
	{ path: "/", element: <RootPage />, errorElement: <ErrorPage /> },
	{ path: "/g1", element: <G1Page /> },
	{ path: "/g2", element: <G2Page /> }
])

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	)
}

export default App
