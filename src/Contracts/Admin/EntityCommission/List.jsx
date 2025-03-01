import { EntityCommissions } from "Commissions"

const ContractEntityCommissions = ({
    parentEntity,
    progress,
}) => {

    return !progress && <EntityCommissions
        breadcrumbItems={[
            {
                title: parentEntity?.title,
                link: `/contracts?title=${parentEntity?.title}`
            },
            {
                title: "CommissionsEntityCommissions"
            }
        ]}

    />
}

export default ContractEntityCommissions
