import { Images } from "MediaCommon"

const ContractImages = ({
    parentEntity,
    progress,
    ...rest
}) => {
    return !progress &&
        <Images
            breadcrumbItems={[
                {
                    title: "Contracts",
                    link: "/contracts"
                },
                {
                    title: `${parentEntity?.title}`,
                    link: `/contracts?title=containing_${parentEntity?.title}`
                },
                {
                    title: "Images"
                }
            ]}
            {...rest}
        />
}

export default ContractImages
