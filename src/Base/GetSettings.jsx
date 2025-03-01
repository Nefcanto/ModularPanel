let settings = null

export async function getSettings() {
    if (settings) {
        return settings
    }
    const settingsResponse = await fetch("/Settings.json")
    const settingsJson = await settingsResponse.json()
    const settingsOverrideResponse = await fetch("/SettingsOverride.json")
    const settingsOverrideJson = await settingsOverrideResponse.json()
    settings = {
        ...settingsJson,
        ...settingsOverrideJson,
    }
    return settings
}

export default getSettings
