import {
    useCallback,
    useEffect,
    useState,
} from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { get } from "App"
import Card from "./Card"

const MenuItemsOrder = () => {

    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        get("menuitem/tree").then(data => {
            setMenuItems(data)
        })
    }, [])

    const moveCard = useCallback((dragIndex, hoverIndex) => {

        setMenuItems(prevCards => {
            let newMenuItems = [...prevCards]
            newMenuItems[dragIndex] = prevCards[hoverIndex]
            newMenuItems[hoverIndex] = prevCards[dragIndex]
            return newMenuItems
        }
        )
    }, [])

    const renderCard = useCallback((card, index) => {
        return (
            <Card
                id={card.id}
                index={index}
                key={card.id}
                moveCard={moveCard}
                text={card.title}
            />
        )
    }, [])

    return <DndProvider backend={HTML5Backend}>
        <div>
            {
                menuItems.map((menuItem, index) => renderCard(menuItem, index))
            }

        </div>
    </DndProvider>
}

export default MenuItemsOrder
