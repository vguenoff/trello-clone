import create from 'zustand'
import produce from 'immer'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { initialList } from '@/data'
import { List, ListState } from '@/types'

const useListStore = create<ListState>()(
    devtools(
        set => ({
            lists: initialList,
            addItem({ listId, taskId, text }) {
                set(
                    produce(({ lists }) => {
                        lists
                            .find((list: List) => list.id === listId)
                            ?.tasks.push({ id: taskId, text })
                    }),
                )
            },
            addList({ listId, title }) {
                set(
                    produce(({ lists }) => {
                        lists.push({ id: listId, title, tasks: [] })
                    }),
                )
            },
        }),
        { name: 'list-storage' },
    ),
)

// Add Devtools Support
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('List Store', useListStore)
}

export { initialList, useListStore }
