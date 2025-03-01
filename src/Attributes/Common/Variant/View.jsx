import {
    useEffect,
    useState,
} from "react"
import {
    FormControl,
    FormGroup,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material"
import { useTop } from "Hooks"
import {
    parseQuery,
    t,
    get,
    post,
} from "App"
import {
    useMessage,
} from "Panel"

const ViewVariants = () => {

    const [progress, setProgress] = useState(false)
    const [attributes, setAttributes] = useState([])
    const [units, setUnits] = useState([])
    const [chosenOptionGuids, setChosenOptionGuids] = useState([])
    const [chosenUnitGuid, setChosenUnitGuid] = useState("")
    const [chosenStock, setChosenStock] = useState({})
    const [variantAlreadyExists, setVariantAlreadyExists] = useState("not-checked")
    const [variant, setVariant] = useState(null)

    const {
        productGuid,
        productId,
        productVariantId,
    } = parseQuery()
    const { error } = useMessage()

    const compareArrays = (firstArray, secondArray) => {
        return JSON.stringify(firstArray) === JSON.stringify(secondArray)
    }

    const handleVariantCheck = () => {
        if (compareArrays(units, []) && compareArrays(attributes, [])) {
            loadAttributes()
            loadUnits()
        }
        if (productVariantId && !variant) {
            get(`/productVariant/get?id=${productVariantId}`).then(data => {
                if (data) {
                    setChosenUnitGuid(data.unitGuid)
                    let options = []
                    attributes.forEach((attribute, index) => {
                        options.push(data?.relatedItems?.attributeOptions[index]?.attributeOptionGuid ? data?.relatedItems?.attributeOptions[index]?.attributeOptionGuid : "")
                    })
                    setChosenOptionGuids(options)
                    setVariantAlreadyExists("yes")
                    setVariant(data)
                } else {
                    setVariantAlreadyExists("no")
                    setVariant(null)
                }
            })
            return
        }
        if (chosenOptionGuids && !chosenOptionGuids.includes("")) {
            if (chosenOptionGuids.length == attributes.length && attributes.length > 0 && chosenUnitGuid) {
                // TO DO: fetch existing variant if it exists and add stock and price form (and image if possible)
                let attributeOptionsCsv = ""
                chosenOptionGuids.forEach(option => attributeOptionsCsv += option + ",")
                console.log("all attributes have a chosen value!")
                get(`/productVariant/lookForVariant?productId=${productId}&unitGuid=${chosenUnitGuid}&attributeOptionGuidsCsv=${attributeOptionsCsv}`).then(data => {
                    if (data) {
                        setVariantAlreadyExists("yes")
                        setVariant(data)
                    } else {
                        setVariantAlreadyExists("no")
                        setVariant(null)
                    }
                })
            }
        }
    }

    const createVariant = () => {
        setProgress(true)
        let attributeOptionsCsv = ""
        chosenOptionGuids.forEach(option => attributeOptionsCsv += option + ",")
        post(`/productVariant/createVariant?productId=${productId}&unitGuid=${chosenUnitGuid}&attributeOptionGuidsCsv=${attributeOptionsCsv}`).then(data => {
            setProgress(false)
            if (data) {
                setVariant(data)
                setVariantAlreadyExists("yes")
            } else {
                setVariantAlreadyExists("no")
            }
        }, (e) => {
            setProgress(false)
            error(e)
        })
    }

    const deleteVariant = () => {
        setProgress(true)
        post(`/productVariant/deleteVariant?productVariantId=${variant.id}`).then(data => {
            setProgress(false)
            setVariant(null)
            setVariantAlreadyExists("no")
        }, (e) => {
            setProgress(false)
            error(e)
        })
    }

    const handleChoosingOption = (value, attributeIndex) => {
        const newChosenOptionGuids = chosenOptionGuids.map((guid, index) => {
            if (index === attributeIndex) {
                return value
            } else {
                return guid
            }
        })
        setChosenOptionGuids(newChosenOptionGuids)
    }

    const getVariantInfo = () => {
        setProgress(true)
        if (variant) {
            get(`/stock/getStock?entityGuid=${variant.guid}`).then(data => {
                if (data && data?.id) {
                    setChosenStock(data)
                } else {
                    setChosenStock({})
                }
            })
        }
    }

    const upsertStock = () => {
        if (chosenStock && chosenStock?.id) {
            post(`/stock/upsert`, {
                id: chosenStock.id,
                amount: chosenStock.amount,
                entityGuid: chosenStock.entityGuid
            }).then(data => {
                setProgress(false)
            }, (e) => {
                setProgress(false)
                error(e)
            })
        } else if (chosenStock && !chosenStock?.id) {
            post(`/stock/upsert`, {
                amount: chosenStock.amount,
                entityGuid: chosenStock.entityGuid
            }).then(data => {
                setProgress(false)
            }, (e) => {
                setProgress(false)
                error(e)
            })
        }
    }

    useTop({
        breadcrumbItems: [],
        subtitle: "",
        title: t("Manage Product Variants")
    })

    const loadAttributes = () => {
        setProgress(true)
        get(`/entityAttributeOption/getEntityAttributesAndOptions?entityGuid=${productGuid}&entityType=product`)
            .then((data) => {
                setProgress(false)
                setAttributes(data)
                const emptyOptionGuids = []
                for (let index = 0; index < data.length; index++) {
                    emptyOptionGuids[index] = ""
                }
                setChosenOptionGuids(emptyOptionGuids)
            }, (e) => {
                setProgress(false)
                error(e)
            })
    }

    const loadUnits = () => {
        setProgress(true)
        get(`/entityUnit/all?entityGuid=${productGuid}&entityType=product`)
            .then((data) => {
                setProgress(false)
                setUnits(data)
            }, (e) => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        if (productGuid && compareArrays(units, []) && compareArrays(attributes, [])) {
            loadAttributes()
            loadUnits()
        }
        if (!compareArrays(units, []) && !compareArrays(attributes, [])) {
            handleVariantCheck()
        }
    }, [chosenOptionGuids, chosenUnitGuid])

    useEffect(() => {
        getVariantInfo()
        if (!variant) {
            setChosenStock({})
        }
    }, [variant])

    return <>
        <div>
            <FormGroup className="flex flex-col gap-y-6">
                {
                    !compareArrays(units, []) ?
                        <FormControl>
                            <InputLabel >
                                {t("Unit")}
                            </InputLabel>
                            <Select
                                onChange={e => setChosenUnitGuid(e.target.value)}
                                label={t("Unit")}
                                value={chosenUnitGuid ? chosenUnitGuid : ""}
                            >
                                {
                                    units.map(unit => <MenuItem
                                        key={unit.Id}
                                        value={unit.unitGuid}
                                    >
                                        {unit.unitTitle}
                                    </MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        : null
                }
                {
                    !compareArrays(attributes, []) ? attributes.map((attribute, index) => <FormControl key={attribute.id}>
                        <InputLabel>
                            {attribute.attributeTitle}
                        </InputLabel>
                        <Select
                            value={chosenOptionGuids[index] && chosenOptionGuids[index] != "" ? chosenOptionGuids[index] : ""}
                            label={attribute.attributeTitle}
                            onChange={e => handleChoosingOption(e.target.value, index)}
                        >
                            {
                                attribute.relatedItems.options.map(option => <MenuItem
                                    key={option.Id}
                                    value={option.optionGuid}
                                >
                                    {option.optionTitle}
                                </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    )
                        : null
                }
            </FormGroup>
            <div className="my-10">
                {
                    variantAlreadyExists === "no" &&
                    <>
                        <button
                            onClick={() => createVariant()}
                            className="border-2 transition-all border-green-400 bg-green-600 hover:bg-green-500 text-white rounded-md p-2"
                        >
                            {t("AttributeCreateVariant")}
                        </button>
                    </>
                }
                {
                    variantAlreadyExists === "yes" &&
                    <>
                        <button
                            onClick={() => deleteVariant()}
                            className="border-2 transition-all border-red-400 bg-red-600 hover:bg-red-500 text-white rounded-md p-2"
                        >
                            {t("AttributesDeleteVariant")}
                        </button>
                    </>
                }
            </div>
            {
                variant && <div className="flex flex-row gap-x-6">
                    <FormGroup className="flex-1">
                        <FormControl>
                            <InputLabel>
                                {t("Stock")}
                            </InputLabel>
                            <OutlinedInput
                                value={chosenStock && chosenStock?.amount ? chosenStock.amount : ""}
                                label={t("Stock")}
                                type="numeric"
                                onChange={(e) => {
                                    if (chosenStock && chosenStock?.id) {
                                        setChosenStock({
                                            amount: e.target.value,
                                            entityGuid: variant.guid,
                                            id: chosenStock.id
                                        })
                                    }
                                    else if (chosenStock) {
                                        setChosenStock({
                                            amount: e.target.value,
                                            entityGuid: variant.guid
                                        })
                                    }
                                }}
                            />
                        </FormControl>
                    </FormGroup>
                    <button
                        onClick={() => upsertStock()}
                        className="flex-3 border-2 transition-all border-blue-400 bg-blue-600 hover:bg-blue-500 text-white rounded-md p-2"
                    >
                        {t("Update Stock")}
                    </button>
                </div>
            }
        </div >
    </>

}

export default ViewVariants
