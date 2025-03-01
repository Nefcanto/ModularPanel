const styleProvider = enumKey => {
    switch (enumKey.toLowerCase()) {
        case "approved":
            return "bg-green-400 dark:text-black"
        case "pending":
            return "bg-yellow-400 dark:text-black"
        case "suspended":
            return "bg-red-400 text-white dark:text-black"
    }
}

export default styleProvider
