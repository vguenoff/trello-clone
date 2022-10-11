import { List } from '@/types'

export const initialList: List[] = [
    {
        id: '0',
        title: 'To Do',
        tasks: [
            {
                id: 'c0',
                text: 'Generate app scaffold. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
        ],
    },
    {
        id: '1',
        title: 'In Progress',
        tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    // {
    //     id: '2',
    //     title: 'Done',
    //     tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    // },
]
