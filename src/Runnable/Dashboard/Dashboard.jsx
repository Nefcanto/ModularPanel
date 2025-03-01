import AddIcon from "@mui/icons-material/Add"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"
import SchoolIcon from "@mui/icons-material/School"
import { ErrorBoundary } from "Panel"
import {
    AreaSample,
    BarSample,
    ComposedSample,
    Dashboard,
    LineSample,
    NumericWidget,
    PieSample,
    RadarSample,
    ScatteredSample,
    Section,
    Widget,
} from "Dashboard"

const Faulty = () => {
    throw "I am faulty"
}

const RunnableDashboard = () => {
    return <Dashboard
        title="InfraDashboard"
        subtitle="CommonYourBusinessInOneLook"
    >
        <Section>
            <NumericWidget
                title="CommonNewLearners"
                icon={AddIcon}
                color="bg-indigo-400"
                start={SchoolIcon}
                bull
                bottomBorder
            >
                <ErrorBoundary>
                    <Faulty />
                </ErrorBoundary>
            </NumericWidget>
            <NumericWidget
                title="CommonLastMonthIncome"
                icon={AttachMoneyIcon}
                color="bg-blue-400"
                bear
                bottomBorder
            >
                2700
            </NumericWidget>
            <NumericWidget
                title="CommonYoyGrowth"
                icon={HourglassEmptyIcon}
                color="bg-orange-400"
                bottomBorder
                percentage
            >
                7
            </NumericWidget>
        </Section>
        <Section>
            <Widget
                title="CommonEngagement"
            >
                <ComposedSample height={300} />
            </Widget>
            <Widget
                title="CommonDemography"
            >
                <PieSample height={300} />
            </Widget>
        </Section>
        <Section>
            <NumericWidget
                title="CommonInstructors"
                small
            >
                170
            </NumericWidget>
            <NumericWidget
                title="CommonCourses"
                small
            >
                90
            </NumericWidget>
            <NumericWidget
                title="CommonLearners"
                small
            >
                2300
            </NumericWidget>
            <NumericWidget
                title="CommonOrders"
                small
            >
                740
            </NumericWidget>
        </Section>
    </Dashboard>
}

export default RunnableDashboard
