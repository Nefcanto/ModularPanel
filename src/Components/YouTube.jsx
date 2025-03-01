const YouTube = ({
    code,
    containerClass
}) => <div className={containerClass || "aspect-video w-full lg:w-4/5 xl:w-3/4"}>
        <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${code}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube"
        />
    </div>

export default YouTube
