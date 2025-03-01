import {
    DateTimeTitleAgo,
    Image,
} from "List"

const ContactRow = entity => <>
    <Image />
    <td>{entity?.title}</td>
    <DateTimeTitleAgo
        date={entity.utcDate}
    />
    <td>{entity?.pricingPriceAmount?.toLocaleString()}</td>
    <td>{entity?.currenciesCurrencySuperUnitName || entity?.currenciesCurrencyName}</td>
</>

export default ContactRow
