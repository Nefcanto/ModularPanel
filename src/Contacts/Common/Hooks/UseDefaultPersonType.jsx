const useDefaultPersonType = () => {

    const isJuridical = window.settings.DefaultPersonType && window.settings.DefaultPersonType === "Juridical"
    const isNatural = !isJuridical

    return {
        isJuridical,
        isNatural,
    }
}

export default useDefaultPersonType
