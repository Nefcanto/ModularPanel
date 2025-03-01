import { ContentForm } from "Form"
import app from "App"

const Content = () => {

    const {
        centralized,
        entityType,
    } = app.parseQuery()

    return <ContentForm
        entityType={entityType}
        centralized={centralized}
    />
}

export default Content
