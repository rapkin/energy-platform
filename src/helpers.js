const types = {
    clinic: 'Поліклініка',
    dentistry: 'Стоматологія'
}

export function getHumanType(type) {
    return types[type]
}