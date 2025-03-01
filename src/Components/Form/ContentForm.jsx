import PageForm from "./PageForm"
import Rte from "./Fields/Rte"

const inputs = props => <>
    <Rte
        property="Content"
        placeholder="InfraWriteYourContentHere"
        {...props}
    />
</>

const ContentForm = props => {

    const dynamicProps = {}
    if (props.centralized) {
        dynamicProps.entityType = 'Content'
    }

    return <PageForm
        title="InfraEditContent"
        inputs={inputs(props)}
        large
        {...props}
        {...dynamicProps}
    />
}

export default ContentForm
