export const capitalize = (str: string) => {
    if(!str) {
        return str
    }

    let firstCommon = str[0].toUpperCase()
    let lastCommon = str.slice(1).toLowerCase()

    return firstCommon + lastCommon
}