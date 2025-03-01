import { twMerge } from "tailwind-merge"

const merge = (...classParts) => {

    return twMerge(classParts.flat())
}

export default merge
