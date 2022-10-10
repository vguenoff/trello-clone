import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { List } from '@/types'

const initialList: List[] = [
    {
        id: '0',
        title: 'To Do',
        tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
        id: '1',
        title: 'In Progress',
        tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
        id: '2',
        title: 'Done',
        tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
]

// const getTasksByListId = (id: string) =>
//     lists.find(list => list.id === id)?.tasks || []

interface ListState {
    lists: List[]
    // increase: (by: number) => void
}

const useListStore = create<ListState>()(
    devtools(
        set => ({
            lists: initialList,
            // increase: (by) => set((state) => ({ bears: state.bears + by })),
        }),
        {
            name: 'list-storage',
        },
    ),
)

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('List Store', useListStore)
}

export {
    initialList,
    useListStore,
    // getTasksByListId
}
