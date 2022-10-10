export interface Task {
    id: string
    text: string
}

export interface List {
    id: string
    title: string
    tasks: Task[]
}

export interface AddItemParams {
    id: string
    payload: { id: string; text: string }
}

export interface ListState {
    lists: List[]
    addItem({ id, payload }: AddItemParams): void
}
