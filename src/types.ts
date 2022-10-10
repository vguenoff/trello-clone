export interface Task {
    id: string
    text: string
}

export interface List {
    id: string
    title: string
    tasks: Task[]
}

export interface AppState {
    lists: List[]
}
