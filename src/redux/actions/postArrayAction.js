export const addPosts = (posts) => ({
	type: "ADD_POSTS",
	payload: posts,
})

export const removePost = (posts, index) => ({
	type: "REMOVE_A_POST",
	payload: { posts, index },
})
