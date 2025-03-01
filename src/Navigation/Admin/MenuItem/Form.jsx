import {
    DialogForm,
    Link,
    Parent,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Link
        placeholder="NavigationUrl"
        property="Url"
    />
    <Parent
        entityType="MenuItem"
        show={entity => entity.title}
    />
</>

const MenuItemForm = <DialogForm
    entityType="MenuItem"
    inputs={inputs}
    title="NavigationMenuItem"
/>

export default MenuItemForm
