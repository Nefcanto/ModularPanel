import Choices from "./Choice/List"
import FieldForm from "./Field/Form"
import Fields from "./Field/List"
import Forms from "./Form/List"
import SavedForms from "./SavedForm/List"

const FormsRoutes = [
    {
        path: "/forms/forms",
        component: Forms
    },
    {
        path: "/forms/fields",
        component: Fields
    },
    {
        path: "/forms/field",
        component: FieldForm
    },
    {
        path: "/forms/savedForms",
        component: SavedForms
    },
    {
        path: "/forms/fieldChoices",
        component: Choices
    }
]

export default FormsRoutes
