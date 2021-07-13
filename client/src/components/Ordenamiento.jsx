export const Name_Order = (a, b) => {
    if(a.nombre < b.nombre) return -1
    if(b.nombre < a.nombre) return 1
    return 0
}

export const Pop_Order = (a, b) => {
    return a.poblacion - b.poblacion
}