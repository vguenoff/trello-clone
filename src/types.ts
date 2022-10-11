// Store
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
    text: string
}

export interface RemoveItemParams {
    listId: string
    taskId: string
}

export interface ListState {
    lists: List[]
    addItem({ listId, text }: AddItemParams): void
    removeItem({ listId, taskId }: RemoveItemParams): void
    addList(title: string): void
    removeList(listId: string): void
}
// Props
export interface AddItemProps {
    children?: React.ReactNode
    actionButtonText: string
    onSet(text: string): void
    dark?: boolean
}
