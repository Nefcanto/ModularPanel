import Progress from "./Progress"

const BlurredProgress = ({ opacity }) => {
    return <>
        <div
            className={`absolute top-0 end-0 bottom-0 start-0 bg-white grid place-items-center md:rounded-lg ${opacity || "opacity-50"} blur-sm dark:bg-gray-900`}
        >

        </div>
        <div
            className="absolute top-0 end-0 bottom-0 start-0 bg-transparent grid place-items-center z-10"
        >

            <Progress
                className="my-12"
            />
        </div>
    </>
}

export default BlurredProgress
