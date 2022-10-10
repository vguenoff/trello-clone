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
    listId: string
    taskId: string
    text: string
}

export interface AddListParams {
    listId: string
    title: string
}

export interface ListState {
    lists: List[]
    addItem({ listId, taskId, text }: AddItemParams): void
    addList({ listId, title }: AddListParams): void
}
