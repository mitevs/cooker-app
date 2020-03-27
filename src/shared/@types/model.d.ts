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
  files: MediaFile[]
}

declare interface MediaFile extends Base {
  name: string
  type: string
  path: string
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
  meta?: string
}

declare interface AssetInput {
  name: string
  type: string
  url: string
  meta?: string
}

declare interface Step extends Base {
  title: string
  text: string
  group?: string
}

declare interface StepInput {
  title: string
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
  servings: number
  prepTime: number
  steps: Step[]
  assets: Asset[]
  ingredients: RecipeIngredient[]
  author: User
}

declare interface RecipeInput {
  title: string
  excerpt: string
  servings: number
  prepTime: number
  steps: StepInput[]
  assets: AssetInput[]
  ingredients: RecipeIngredient[]
  authorId: string
}
