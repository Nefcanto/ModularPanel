const Download = ({ Url }) => {

    return <a
        href={Url}
        target="_blank"
        className="block bg-red-400 px-10 py-20 hover:bg-red-800 hover:text-white"
    >
        Download Component
    </a>
}

export default Download
