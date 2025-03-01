import CandlestickChartIcon from "@mui/icons-material/CandlestickChart"
import {
    parseQuery,
    post,
} from "App"
import {
    DatePart,
    List,
    ListAction,
} from "List"

const listActions = <>
    <ListAction
        title="PricingCalculateCandle"
        icon={CandlestickChartIcon}
        onClick={({
            error,
            reloadList,
            setProgress,
            success,
        }) => {
            const {
                entityGuid,
            } = parseQuery()

            setProgress(true)
            post(`/priceCandle/Calculate?entityGuid=${entityGuid}`)
                .then(data => {
                    setProgress(false)
                    success("InfraDone")
                    reloadList(true)
                }, e => {
                    error(e)
                })
        }} />

</>

const headers = <>

    <th>PricingOpen</th>
    <th>PricingMin</th>
    <th>PricingMax</th>
    <th>PricingMinMaxAverage</th>
    <th>PricingClose</th>
    <th>PricingDate</th>
</>

const row = entity => <>
    <td>
        {entity.open.toLocaleString()}
    </td>
    <td>
        {entity.min.toLocaleString()}
    </td>
    <td>
        {entity.max.toLocaleString()}
    </td>
    <td>
        {entity.minMaxAverage.toLocaleString()}
    </td>
    <td>
        {entity.close.toLocaleString()}
    </td>
    <td>
        <DatePart
            date={entity?.utcDateOnly}
        />
    </td>
</>

const PriceCandleList = () => {
    return <>
        <List
            title="PricingPriceCandles"
            entityType="PriceCandle"
            listActions={listActions}
            headers={headers}
            row={row}
        />
    </>
}

export default PriceCandleList
