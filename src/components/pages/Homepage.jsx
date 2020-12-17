import React, { useEffect, useState } from "react"

import { Container } from "@material-ui/core"

import { useDispatch } from "react-redux"

import fetchCall from "../../utils/fetchCall"
import PostItem from "../functional/PostItem"

import { addPosts } from "../../redux/actions/postArrayAction"

const Homepage = () => {
	const [posts, setPosts] = useState([])

	const dispatch = useDispatch()

	useEffect(() => {
		const fetchPosts = async () => {
			const data = await fetchCall("", "GET")
			setPosts(data.splice(0, 10))
		}
		fetchPosts()
	}, [])

	dispatch(addPosts(posts))

	return (
		<Container>
			{posts.map((post, index) => (
				<PostItem key={index} post={post} />
			))}
		</Container>
	)
}

export default Homepage
