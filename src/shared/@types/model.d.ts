declare interface Base {
  id?: string
  createdOn?: Date
  modifiedOn?: Date
}

declare interface User extends Base {
  email: string
  username: string
  password?: string
  shortBio: string
}

declare interface Ingredient extends Base {
  name: string
  baseUnit: string
}

declare interface Recipe extends Base {
  title: string
  excerpt: string
  servings?: number
  prepTime?: number
  nutritionFacts?: string
  prepSteps?: string
  assets?: any[]
  ingredients?: any[]
  author?: User
}