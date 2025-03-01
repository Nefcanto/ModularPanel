import {
    DialogForm,
    Group,
    Numeric,
    View,
} from "Form"

const inputs = <div className="grid sm:grid-cols-2 gap-4">
    <Group title="InfraColumn">
        <View
            placeholder="InfraExtraSmall"
            value="1"
            dir="ltr"
        />
        <Numeric
            hint="Max = 2"
            max={2}
            placeholder="InfraSmall"
            property="SmCols"
        />
        <Numeric
            hint="Max = 4"
            max={4}
            placeholder="InfraMedium"
            property="MdCols"
        />
        <Numeric
            hint="Max = 6"
            max={6}
            placeholder="InfraLarge"
            property="LgCols"
        />
        <Numeric
            hint="Max = 8"
            max={8}
            placeholder="InfraExtraLarge"
            property="XlCols"
        />
        <Numeric
            hint="Max = 12"
            max={12}
            placeholder="InfraExtraExtraLarge"
            property="XxlCols"
        />
    </Group>
    <Group title="InfraRow">
        <View
            placeholder="InfraExtraSmall"
            value="1"
            dir="ltr"
        />
        <Numeric
            hint="Max = 2"
            max={2}
            placeholder="InfraSmall"
            property="SmRows"
        />
        <Numeric
            hint="Max = 4"
            max={4}
            placeholder="InfraMedium"
            property="MdRows"
        />
        <Numeric
            hint="Max = 6"
            max={6}
            placeholder="InfraLarge"
            property="LgRows"
        />
        <Numeric
            hint="Max = 8"
            max={8}
            placeholder="InfraExtraLarge"
            property="XlRows"
        />
        <Numeric
            hint="Max = 12"
            max={12}
            placeholder="InfraExtraExtraLarge"
            property="XxlRows"
        />
    </Group>
</div>

const Dimensions = <DialogForm
    entityType="Block"
    title="DashboardsDimensions"
    inputs={inputs}
/>

export default Dimensions
