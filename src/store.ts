import create from 'zustand'
import produce from 'immer'
import { nanoid } from 'nanoid'
import { devtools } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { initialList } from '@/data'
import { List, ListState, Task } from '@/types'

const useListStore = create<ListState>()(
    devtools(
        set => ({
            lists: initialList,
            // Actions
            addList(title) {
                set(
                    produce(({ lists }) => {
                        lists.push({ id: nanoid(), title, tasks: [] })
                    }),
                )
            },
            removeList(listId) {
                set(
                    produce(({ lists }) => {
                        const listIndex = lists.findIndex(
                            (list: List) => list.id === listId,
                        )

                        lists = lists.splice(listIndex, 1)
                    }),
                )
            },
            addItem({ listId, text }) {
                set(
                    produce(({ lists }) => {
                        lists
                            .find((list: List) => list.id === listId)
                            ?.tasks.push({ id: nanoid(), text })
                    }),
                )
            },
            removeItem({ listId, taskId }) {
                set(
                    produce(({ lists }) => {
                        const listIndex = lists.findIndex(
                            (list: List) => list.id === listId,
                        )
                        const taskIndex = lists[listIndex].tasks.findIndex(
                            (task: Task) => task.id === taskId,
                        )

                        lists = lists[listIndex].tasks.splice(taskIndex, 1)
                    }),
                )
            },
            // editItem
            // moveItem
        }),
        { name: 'list-storage' },
    ),
)

// Add Devtools Support
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('List Store', useListStore)
}

export { useListStore }
