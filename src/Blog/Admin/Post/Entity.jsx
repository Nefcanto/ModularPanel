const Post = ({ entity }) => {
    return <p title={entity.summary}>
        {entity.title}
    </p>
}

export default Post
