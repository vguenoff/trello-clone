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

export interface ListState {
    lists: List[]
    addItem({ listId, text }: AddItemParams): void
    addList(title: string): void
}

export interface AddItemProps {
    dark?: boolean
    onAdd(text: string): void
    mainButtonText: string
}
