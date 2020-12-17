import React from "react"

import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
	root: {
		margin: "2rem 0",
		padding: "2rem",
		backgroundColor: "#D3D3D3",
	},
})

const PostItem = ({ post }) => {
	const classes = useStyles()

	return (
		<Link className="link" to={`/post/${post.id}`}>
			<Paper className={classes.root} elevation={3}>
				<Typography variant="h3">{post.title}</Typography>
				<Typography variant="h6">{post.body}</Typography>
			</Paper>
		</Link>
	)
}

export default PostItem
