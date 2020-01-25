declare interface Base {
  id: string
  createdOn: Date
  modifiedOn: Date
}

declare interface User extends Base {
  email: string
  username: string
  password?: string
  shortBio: string
}

declare interface Ingredient {
  id: number
  name: string
  baseUnit: string
}

declare interface Asset extends Base {
  name: string
  type: string
  url: string
}

declare interface Step extends Base {
  text: string
  group?: string
}

declare interface RecipeIngredient {
  name: string
  quantity: number
  baseUnit: string
}

declare interface Recipe extends Base {
  title: string
  excerpt: string
  servings?: number
  prepTime?: number
  steps?: Step[]
  assets?: Asset[]
  ingredients?: RecipeIngredient[]
  author?: User
}
