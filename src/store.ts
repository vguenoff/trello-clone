import create from 'zustand'
import produce from 'immer'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'

import { initialList } from '@/data'
import { AddItemParams, List, ListState } from '@/types'

const useListStore = create<ListState>()(
    devtools(
        set => ({
            lists: initialList,
            addItem: ({ id, payload }: AddItemParams) =>
                set(
                    produce(({ lists }) => {
                        lists
                            .find((list: List) => list.id === id)
                            ?.tasks.push(payload)
                    }),
                ),
        }),
        { name: 'list-storage' },
    ),
)

// Add Devtools Support
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('List Store', useListStore)
}

export { initialList, useListStore }
