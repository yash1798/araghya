export const postArrayReducer = (state = {}, action) => {
	const { type, payload } = action
	switch (type) {
		case "ADD_POSTS":
			return { posts: payload }
		case "REMOVE_A_POST":
			const posts = payload.posts.filter((post) => post.id !== payload.index)
			return { posts }
		default:
			return state
	}
}
