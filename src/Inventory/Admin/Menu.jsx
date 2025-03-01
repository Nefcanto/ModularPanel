import FactoryIcon from "@mui/icons-material/Factory"

const InventoryMenu = [
    {
        title: "InventoryInventoryManagement",
        icon: FactoryIcon,
        children: [
            {
                title: "InventoryWarehouses",
                path: "/inventory/warehouses"
            },
            {
                title: "InventorySuppliers",
                path: "/suppliers"
            }
        ]
    }
]

export default InventoryMenu
