import { useState } from "react"
import {
    post,
    t,
} from "App"

function rgbNormalization(unNormalizedRbg) {
    const [key, value] = unNormalizedRbg.split(":")
    const normalized = value.trim().split(",")
    const lastSplit = normalized[2].split("/")
    const isAlphaAvailable = lastSplit.length == 2

    return [
        key.trim().split("--")[1],
        {
            r: normalized[0].trim(),
            g: normalized[1].trim(),
            b: isAlphaAvailable ? lastSplit[0].trim() : normalized[2].trim(),
        }
    ]
}

function colorDecoder(css) {
    const regex = /^\s*--color\d+\s*:\s*[\d, ]*;\s*$/gm
    const validLines = css.match(regex)
    if (validLines) {
        css = validLines.join("\n")
    }
    const colorLines = css.split(";").map(i => i.trim()).filter(i => i)

    const colorsDecoded = {}
    for (let colorLine of colorLines) {
        const [key, value] = rgbNormalization(colorLine)
        colorsDecoded[key] = value
    }
    return colorsDecoded
}

function colorEncoder(object) {
    const rgbEncoded = Object.keys(object).reduce((prevValue, rgbKey) => {
        const currentRgb = object[rgbKey]

        return `${prevValue}\n    --${rgbKey}: ${currentRgb.r}, ${currentRgb.g}, ${currentRgb.b};`
    }, "")

    return `:root {${rgbEncoded}\n}`
}

const useColorPicker = (
    colors,
    entityId,
    entityType
) => {
    if (!colors) {
        return []
    }
    const [colorsDecoded, setColors] = useState(colorDecoder(colors))
    function saveColors({
        error,
        setProgress,
        success,
    }) {
        setProgress(true)
        post(`/${entityType}/update?id=${entityId}`, {
            id: entityId,
            TextualContent: colorEncoder(colorsDecoded)
        }).then(
            () => {
                success(t("InfraItemUpdatedSuccessfully"))
                setProgress(false)
            },
            e => {
                error(e)
                setProgress(false)
            }
        )
    }

    function setColor(color, colorKey) {
        setColors({ ...colorsDecoded, [colorKey]: color.rgb })
    }

    return [
        colorsDecoded,
        saveColors,
        setColor,
    ]
}

export default useColorPicker
