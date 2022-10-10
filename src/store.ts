import create from 'zustand'
import produce from 'immer'
import { nanoid } from 'nanoid'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { initialList } from '@/data'
import { List, ListState } from '@/types'

const useListStore = create<ListState>()(
    devtools(
        set => ({
            lists: initialList,
            addItem({ listId, text }) {
                set(
                    produce(({ lists }) => {
                        lists
                            .find((list: List) => list.id === listId)
                            ?.tasks.push({ id: nanoid(), text })
                    }),
                )
            },
            addList(title) {
                set(
                    produce(({ lists }) => {
                        lists.push({ id: nanoid(), title, tasks: [] })
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
