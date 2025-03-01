import {
    useEffect,
    useState,
} from "react"
import { Helmet } from "react-helmet-async"

const TestTemplate = () => {

    const [json, setJson] = useState(`
    {
        "name": "Someone"
    }`)
    const parseJson = () => {
        try {
            const parsedJson = JSON.parse(json)
            return parsedJson
        } catch {
            return data
        }
    }
    const [data, setData] = useState(parseJson)
    const [jsx, setJsx] = useState(`<div>
    <h1>Hello {data.name} - {data.age}!</h1>
    <p>This is compiled JSX.</p>
</div>`)

    useEffect(() => {
        setData(parseJson())
    }, [json])

    useEffect(() => {
        window.data = data
    }, [data])

    useEffect(() => {
        try {
            const compiledCode = Babel.transform(jsx, {
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
    }, [jsx, data])

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

    return <div>
        <Helmet>
            <script src="https://statics.holism.ir/babel.min.js"></script>
            <script src="https://statics.holism.ir/react.development.js"></script>
            <script src="https://statics.holism.ir/react-dom.development.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <style type="text/tailwindcss">{tailwind}</style>
        </Helmet>
        <div className="flex flex-col gap-4">
            <textarea
                className="bg-slate-900 text-white w-full h-48 p-4 non-printable"
                value={json}
                onChange={e => setJson(e.target.value)}
            />
            <div className="w-full h-screen flex justify-between gap-4">
                <textarea
                    className="bg-slate-900 text-white w-full p-4 non-printable"
                    value={jsx}
                    onChange={e => setJsx(e.target.value)}
                />
                <div className="printable w-full bg-slate-900 text-white overflow-scroll">
                    <div id="output"></div>
                </div>
            </div>
        </div>
    </div>
}

export default TestTemplate
