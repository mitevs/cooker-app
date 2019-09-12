interface Base {
    id: string
    createdOn: Date
    modifiedOn: Date
}

interface Ingredient extends Base {
    name: string
    baseUnit: string
}
