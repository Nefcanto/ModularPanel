import { CommissionTotals } from "Commissions"

const ContractCommissionTotals = ({
    parentEntity,
    progress,
}) => {
    return !progress && <CommissionTotals
        breadcrumbItems={[
            {
                title: "CommissionsEntityCommissions"
            },
            {
                title: parentEntity?.title,
                link: `/contracts?title=${parentEntity?.title}`
            },
        ]}
    />
}

export default ContractCommissionTotals
