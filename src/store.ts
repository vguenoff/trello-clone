import { List } from '@/types'

const lists: List[] = [
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

const getTasksByListId = (id: string) =>
    lists.find(list => list.id === id)?.tasks || []

export { lists, getTasksByListId }
