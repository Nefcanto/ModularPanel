const Question = ({ entity }) => {
    return <div>
        <div>{entity.title.cut(20)}</div>
    </div>
}

export default Question
