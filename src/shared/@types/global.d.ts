declare interface AppContext {
  user: User | null
  setUser: (user: User) => void
}

declare interface AppConfigBase {
  env: string
}

declare const IS_SERVER: boolean
