import {
    DialogForm,
    Text,
    Title,
} from "Form"
import SocialNetworkField from "../SocialNetwork/Field"

const inputs = entity => <>
    <Title />
    <SocialNetworkField />
    <Text
        property="Value"
        placeholder="InfraValue"
    />
</>

const SocialProfileForm = () => {
    return <DialogForm
        entityType="SocialProfile"
        humanReadableEntityType="ContactsSocialProfile"
        inputs={inputs}
    />
}

export default SocialProfileForm
