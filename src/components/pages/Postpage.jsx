import React, { useState } from "react"

import { Redirect, useParams } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"

import { Container, Button, Typography } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import fetchCall from "../../utils/fetchCall"

import { removePost } from "../../redux/actions/postArrayAction"

const Postpage = () => {
	const params = useParams()
	const dispatch = useDispatch()

	const [open, setOpen] = useState(false)
	const [flag, setFlag] = useState(false)

	const posts = useSelector((state) => state.posts.posts)

	const post = posts.filter((post) => post.id === parseInt(params.id))[0]

	const [title, setTitle] = useState(post.title)
	const [body, setBody] = useState(post.body)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleDelete = async () => {
		const data = await fetchCall(`${post.id}`, "DELETE")

		console.log(data)

		dispatch(removePost(posts, post.id - 1))
		setFlag(true)
	}

	const handleEdit = async () => {
		const data = await fetchCall(`${post.id}`, "PUT", null, {
			id: post.id,
			title,
			body,
			userId: post.userId,
		})
		setOpen(false)
		console.log(data)
	}

	if (flag) {
		return <Redirect to="/" />
	}

	return (
		<Container>
			<Typography variant="h1">{title}</Typography>
			<Typography variant="h3">{body}</Typography>
			<Button onClick={handleOpen} variant="contained" color="primary">
				Edit
			</Button>
			<Button onClick={handleDelete} variant="contained" color="secondary">
				Delete
			</Button>
			<Dialog open={open}>
				<DialogTitle id="form-dialog-title">EDIT</DialogTitle>
				<DialogContent>
					<DialogContentText>Edit the post</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						label="Title"
						type="text"
						fullWidth
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextField
						autoFocus
						margin="dense"
						label="Body"
						type="text"
						fullWidth
						onChange={(e) => setBody(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)} color="primary">
						Cancel
					</Button>
					<Button onClick={handleEdit} color="primary">
						Edit
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	)
}

export default Postpage
