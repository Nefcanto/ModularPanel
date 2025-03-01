import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { useMessage } from "Hooks"
import { InlineForm } from "Form"
import Image from "./Image"
import JuridicalPersonInputs from "../JuridicalPerson/Inputs"
import NaturalPersonInputs from "../NaturalPerson/Inputs"

const PersonInfo = () => {
    const [entity, setEntity] = useState({})
    const [progress, setProgress] = useState(true)
    const { error } = useMessage()

    const loadEntity = () => {
        let url = "/contacts/get?"
        if (window.role) {
            url += `role=${window.role}&`
        }
        if (window.defaultPersonType) {
            url += `defaultPersonType=${window.defaultPersonType}`
        }
        get(url)
            .then(data => {
                setEntity(data)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        loadEntity()
    }, [])

    return !progress && <div className="p-16">
        <div className="p-8 bg-white dark:bg-stone-950 shadow-xs mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                </div>
                <div className="relative">
                    <div className="w-48 h-48 overflow-hidden bg-violet-400 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                        <Image
                            loadEntity={loadEntity}
                            uploadUrl={`/contacts/setImage?id=${entity?.id}${window.role ? `&role=${window.role}` : ""}`}
                            url={entity?.relatedItems?.personImageUrl || entity?.relatedItems?.imageUrl}
                        />
                    </div>
                </div>
                {/* <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                    <button className="text-white py-2 px-4 uppercase rounded-xs bg-blue-400 hover:bg-blue-500 shadow-xs hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Connect</button>
                    <button className="text-white py-2 px-4 uppercase rounded-xs bg-gray-700 hover:bg-gray-800 shadow-xs hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Message</button>
                </div> */}
            </div>
            <div className="mt-32 text-center [&>div]:py-1">
                {/* <h1 className="text-4xl font-medium text-gray-700">
                    {entity?.fullName}
                </h1> */}
                <InlineForm
                    entity={entity}
                    entityType="Contacts"
                    inputs={() => entity.hasOwnProperty("name") ? JuridicalPersonInputs : NaturalPersonInputs}
                />
            </div>
        </div>
    </div>
}

export default PersonInfo
