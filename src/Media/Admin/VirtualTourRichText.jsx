const VirtualTour = ({
    title,
    url,
}) => {
    return <iframe
        src={url}
        title={title}
        loading="lazy"
    >Virtual Tour</iframe>
}

export default VirtualTour
