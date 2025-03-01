import { t } from "App"
import {
    BooleanProperty,
    Image,
} from "List"

const ReceiptCard = entity => {

    const label = "font-bold text-md bg-gray-200 p-1 rounded-sm"
    const value = "font-semibold text-sm border p-1 rounded-sm"

    return <div className="border-2 p-4 grid grid-cols-2 gap-2">
        <div className={label}>{t("PaymentNote")}</div>
        <div className={value}>{entity.note}</div>
        <div className={label}>{t("PaymentMethod")}</div>
        <div className={value}>{entity.method}</div>
        <div className={label}>{t("PaymentBank")}</div>
        <div className={value}>{entity.bank}</div>
        <div className={label}>{t("PaymentBranchCode")}</div>
        <div className={value}>{entity.branchCode}</div>
        <div className={label}>{t("PaymentOwnerName")}</div>
        <div className={value}>{entity.ownerName}</div>
        <div className={label}>{t("PaymentAmount")}</div>
        <div className={value}>{entity?.amount?.toLocaleString()}</div>
        <div className={label}>{t("PaymentTrackingNumber")}</div>
        <div className={value}>{entity.trackingNumber}</div>
        <div className={label}>{t("PaymentReferenceNumber")}</div>
        <div className={value}>{entity.referenceNumber}</div>
        <div className={label}>{t("PaymentIsApproved")}</div>
        <BooleanProperty
            value={entity?.isApproved}
            actionUrl={`/receipt/toggleBoolean?id=${entity.id}&property=isApproved`}
        />
        <div className={label}>{t("PaymentIsSeen")}</div>
        <BooleanProperty
            value={entity?.isSeen}
            actionUrl={`/receipt/toggleBoolean?id=${entity.id}&property=isSeen`}
        />
        <div className={label}>{t("PaymentIsDenied")}</div>
        <BooleanProperty
            value={entity?.isDenied}
            actionUrl={`/receipt/toggleBoolean?id=${entity.id}&property=isDenied`}
        />
        <div className="p-2">
            <Image />
        </div>
    </div>
}

export default ReceiptCard
