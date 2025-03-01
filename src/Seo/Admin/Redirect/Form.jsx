import { useState } from "react"
import {
    Check,
    DialogForm,
    Link,
    Select,
    Text,
} from "Form"

const items = [
    {
        id: 1,
        value: 301
    },
    {
        id: 2,
        value: 302
    },
    {
        id: 3,
        value: 303
    },
    {
        id: 4,
        value: 307
    },
    {
        id: 5,
        value: 308
    }
]

const inputs = () => {

    const [isRegex, setIsRegex] = useState(false)

    return <>
        <Check
            property="IsRegex"
            placeholder="SeoIsRegex"
            onChange={value => setIsRegex(value)}
        />
        {
            isRegex
                ?
                <>
                    <Text
                        property="OldUrl"
                        placeholder="SeoOldUrl"
                        required
                        dir="ltr"
                    />
                    <Text
                        property="NewUrl"
                        placeholder="SeoNewUrl"
                        required
                        dir="ltr"
                    />
                </>
                :
                <>
                    <Link
                        property="OldUrl"
                        placeholder="SeoOldUrl"
                        required
                    />
                    <Link
                        property="NewUrl"
                        placeholder="SeoNewUrl"
                        required
                    />
                </>
        }
        <Select
            property="Code"
            placeholder="SeoCode"
            options={items}
            display={i => i.value}
            choose={i => i.value}
        />
    </>
}

const RedirectForm = <DialogForm
    entityType="Redirect"
    humanReadableEntityType="SeoRedirect"
    inputs={inputs}
/>

export default RedirectForm
