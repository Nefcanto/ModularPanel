import {
    useState,
    useEffect,
    useMemo,
} from "react"
import { Helmet } from "react-helmet-async"
import {
    camelize,
    get,
    parseQuery,
} from "App"

const ViewReport = ({
    error,
    setProgress,
}) => {

    const { id } = parseQuery()
    const [cube, setCube] = useState()
    const [dimensions, setDimensions] = useState()
    const [facts, setFacts] = useState()
    const [extra, setExtra] = useState()
    const [template, setTemplate] = useState()
    window.camelize = camelize

    const load = () => {
        setProgress(true)
        get(`/reporting/data?reportId=${id}`)
            .then(result => {
                const {
                    cube,
                    extra,
                    template,
                } = result
                const {
                    data,
                    dimensions,
                    facts,
                } = cube
                setProgress(false)
                setCube(data)
                setDimensions(dimensions)
                setFacts(facts)
                setExtra(extra)
                setTemplate(template)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        load()
    }, [])

    useEffect(() => {
        window.cube = cube
        window.dimensions = dimensions
        window.facts = facts
        window.template = template
        window.extra = extra
    }, [cube, dimensions, facts, template, extra])

    useEffect(() => {
        try {
            const compiledCode = Babel.transform(template.code, {
                presets: ["react"]
            }).code
            const reactElement = new Function("return " + compiledCode)()

            const containerElement = document.getElementById("output")
            let isReactRoot = false
            for (const prop in containerElement) {
                if (prop.startsWith("__reactContainer$")) {
                    isReactRoot = true
                }
            }
            if (isReactRoot) {
                window.root.render(reactElement)
            }
            else {
                const root = ReactDOM.createRoot(document.getElementById("output"))
                root.render(reactElement)
                window.root = root
            }
        } catch {

        }
    }, [cube, template])

    const tailwind = `
    @layer utilities {
        .a4-paper {
            @apply w-[793.701px] h-[1122.519px];
        }

        .letter-paper {
            @apply w-[816px] h-[1056px];
        }

        .legal-paper {
            @apply w-[816px] h-[1344px];
        }

        .a5-paper {
            @apply w-[559.055px] h-[793.701px];
        }

        .a3-paper {
            @apply w-[1122.519px] h-[1587.402px];
        }

        .tabloid-paper {
            @apply w-[1056px] h-[1632px];
        }

        .b5-paper {
            @apply w-[661.417px] h-[944.882px];
        }

        .executive-paper {
            @apply w-[696px] h-[1008px];
        }

        .tabloid-extra-paper {
            @apply w-[1152px] h-[1728px];
        }
    }`

    const testJsx = <div className="bg-white text-black">
        <table className="border-collapse table-auto text-center mx-auto">
            <thead>
                <tr>
                    {
                        window.dimensions?.map(dimension => <th
                            className="px-4 py-2 border-b border-gray-200"
                            key={dimension.id}
                        >
                            {dimension.translation}
                        </th>)
                    }
                    {
                        window.facts?.map(fact => <th
                            className="px-4 py-2 border-b border-gray-200"
                            key={fact.id}
                        >
                            {fact.translation}
                        </th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    cube?.map((item, index) => {
                        const keys = Object.keys(item)
                        return <tr key={index}>
                            {
                                keys.map((key, index) => <td
                                    className="px-4 py-2 border-b border-gray-200"
                                    key={index}
                                >
                                    {item[key]}
                                </td>)
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>

    return <div>
        <Helmet>
            <script src="https://statics.holism.ir/babel.min.js"></script>
            <script src="https://statics.holism.ir/react.development.js"></script>
            <script src="https://statics.holism.ir/react-dom.development.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <style type="text/tailwindcss">{tailwind}</style>
        </Helmet>
        {/* {testJsx} */}
        <div className="my-10"></div>
        <div className="printable w-full">
            <div id="output"></div>
        </div>
    </div>
}

export default ViewReport
