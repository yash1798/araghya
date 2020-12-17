import React from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Homepage from "./components/pages/Homepage"
import Postpage from "./components/pages/Postpage"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/post/:id" exact component={Postpage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
